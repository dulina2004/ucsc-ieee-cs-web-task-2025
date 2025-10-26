import emailjs from "@emailjs/browser";

// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

// Initialize EmailJS
export const initEmailJS = () => {
    if (EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
};

interface RegistrationEmailParams {
    to_email: string;
    to_name: string;
    team_name: string;
    registration_type: "individual" | "team";
    team_size?: number;
    team_members?: string; // Comma-separated list of team member names
    event_name: string;
    event_date: string;
    event_location: string;
}

/**
 * Send registration confirmation email to the participant
 * @param params - Email parameters including recipient details and event info
 * @returns Promise<boolean> - Success status
 */
export const sendRegistrationEmail = async (
    params: RegistrationEmailParams
): Promise<boolean> => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.error(
            "EmailJS configuration is incomplete. Please check your environment variables."
        );
        return false;
    }

    try {
        const templateParams = {
            to_email: params.to_email,
            to_name: params.to_name,
            team_name: params.team_name,
            registration_type: params.registration_type,
            team_size: params.team_size || 1,
            team_members: params.team_members || params.to_name,
            event_name: params.event_name,
            event_date: params.event_date,
            event_location: params.event_location,
            registration_date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            reply_to: params.to_email, // For EmailJS reply-to field
        };

        console.log("Sending email with params:", templateParams);

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        if (response.status === 200) {
            console.log("Registration email sent successfully!");
            return true;
        }

        return false;
    } catch (error) {
        console.error("Failed to send registration email:", error);
        return false;
    }
};
