// Google Sheets Integration Service
// Sends registration data to Google Sheets via Google Apps Script webhook

const GOOGLE_SHEETS_WEBHOOK_URL =
    import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || "";

interface IndividualRegistration {
    registrationType: "individual";
    teamName: string;
    name: string;
    email: string;
    institution: string;
    role: string;
}

interface TeamMember {
    name: string;
    email: string;
    institution: string;
    role: string;
}

interface TeamRegistration {
    registrationType: "team";
    teamName: string;
    teamSize: number;
    members: TeamMember[];
}

type RegistrationData = IndividualRegistration | TeamRegistration;

/**
 * Send registration data to Google Sheets
 * @param data - Registration data (individual or team)
 * @returns Promise<boolean> - Success status
 */
export const sendToGoogleSheets = async (
    data: RegistrationData
): Promise<boolean> => {
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
        console.warn(
            "Google Sheets webhook URL not configured. Skipping Google Sheets integration."
        );
        return false;
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors", // Google Apps Script requires no-cors mode
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Note: In no-cors mode, we can't read the response
        // We assume success if no error is thrown
        console.log("Registration data sent to Google Sheets successfully");
        return true;
    } catch (error) {
        console.error("Failed to send registration to Google Sheets:", error);
        return false;
    }
};

/**
 * Send individual registration to Google Sheets
 * @param teamName - Team name
 * @param name - Individual's name
 * @param email - Individual's email
 * @param institution - Institution name
 * @param role - Role (Student/Professional/Other)
 * @returns Promise<boolean> - Success status
 */
export const sendIndividualRegistration = async (
    teamName: string,
    name: string,
    email: string,
    institution: string,
    role: string
): Promise<boolean> => {
    const data: IndividualRegistration = {
        registrationType: "individual",
        teamName,
        name,
        email,
        institution,
        role,
    };

    return sendToGoogleSheets(data);
};

/**
 * Send team registration to Google Sheets
 * @param teamName - Team name
 * @param teamSize - Number of team members
 * @param members - Array of team member details
 * @returns Promise<boolean> - Success status
 */
export const sendTeamRegistration = async (
    teamName: string,
    teamSize: number,
    members: TeamMember[]
): Promise<boolean> => {
    const data: TeamRegistration = {
        registrationType: "team",
        teamName,
        teamSize,
        members,
    };

    return sendToGoogleSheets(data);
};
