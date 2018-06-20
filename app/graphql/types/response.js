module.exports = `
    type LoginResponse {
        token: String
        refreshToken: String
        id: String
        email: String
        firstName: String
        lastName: String
        hasAvatar: Boolean
        error: String
    }
    type CheckTokensResponse {
        token: String
        refreshToken: String
        status: Boolean!
        error: String
    }
    type StandardResponse {
        status: Boolean!
        error: String
    }
`;