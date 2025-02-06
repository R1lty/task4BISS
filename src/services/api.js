import axios from "axios";

const API_URL = "/api/v1/Clients";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vIiwianRpIjoiZDYwOTM0ODAtY2U3NC00MTY5LTk0YTAtYmRjOGE4MGUyNjYxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkNsaWVudCBtYW5hZ2VtZW50IiwiVGFyaWZmIG1hbmFnZW1lbnQgaW4gem9uZXMiLCJFZGl0Q2FyZHMiLCJXZWJTZXJ2aWNlX0NyZWF0ZUNvbnRyYWN0IiwiV2ViQWRtaW5fQ2xpZW50R3JvdXBzX1JlYWQiLCJQcm9kdWN0cyBtYW5hZ2VtZW50IiwiR3VhcmRpYW5fT3BlbkJhcnJpZXJFbmFibGVkIiwiV2ViQWRtaW5fU2VydmljZXMiLCJVc2VyIGdyb3VwIG1hbmFnZW1lbnQiLCJXZWJBZG1pbl9QYXNzQ2hlY2siLCJXZWJBZG1pbl9FbnRyYW5jZXNCeVpvbmVXaWRnZXQiLCJXZWJBZG1pbl9QYXJraW5nU3BhY2VNb25pdG9yaW5nIiwiV2ViQWRtaW5fQ2xpZW50R3JvdXBzX0VkaXQiLCJab25lIG1hbmFnZW1lbnQiLCJXZWJBZG1pbl9WaXNpdHNfRWRpdCIsIldlYkFkbWluX1Zpc2l0c19QYXNzTWFuYWdlbWVudCIsIldlYkFkbWluX0ltcG9ydCIsIldlYkFkbWluX1BhcmtpbmdPY2N1cGFuY3lTdGF0aXN0aWNzIiwiV2ViU2VydmljZV9TZXNzaW9uU3RvcHBlZCIsIldlYlNlcnZpY2VfUGF5bWVudFVwZGF0ZWQiLCJUcmFuc2xhdGlvbiBlZGl0b3IiLCJTZXR0aW5ncyBtYW5hZ2VtZW50IiwiRXZlbnQgdGlja2V0IHByaW50aW5nIiwiU3lzdGVtIGV2ZW50IGxvZyIsIk9wZXJhdG9yIGxvZyIsIlN5c3RlbSBzdGF0aXN0aWNzIiwiWCBhbmQgWiByZXBvcnQiLCJHdWFyZGlhbiBtb2R1bGUiLCJDYXNoaWVyIG1vZHVsZSIsIlBheW1lbnQgbG9nIiwiRGlzY291bnRlciBtb2R1bGUiLCJUYXJpZmYgY2hhcnQgYWNjZXNzIiwiRGVsZXRlIGNsaWVudCIsIkVkaXQgY2xpZW50IiwiVGFyaWZmIGNhbGN1bGF0b3IgYWNjZXNzIiwiV2ViU2VydmljZV9HZXRQcm9kdWN0c0J5R3JvdXAiLCJFeGNlcHRpb24gZGF5cyBtYW5hZ2VtZW50IiwiV2ViU2VydmljZV9DYW5jZWxDb250cmFjdCIsIkNvbnRyYWN0IG1hbmFnZW1lbnQiLCJUaW1ldGFibGUgbWFuYWdlbWVudCIsIlVzZXIgbWFuYWdlbWVudCIsIlZpc2l0b3IgbWFuYWdlbWVudCIsIldlYlNlcnZpY2VfR2V0U2VydmljZUZlZUJ5VGlja2V0SUQiLCJXZWJTZXJ2aWNlX1BheUZvclNlcnZpY2UiLCJUYXJpZmYgbWFuYWdlbWVudCIsIkV4aXQgdm91Y2hlciBwcmludGluZyIsIkJvb2tpbmcgbWFuYWdlbWVudCIsIk9uIHN0cmVldCBzdWJzY3JpcHRpb24gbWFuYWdlbWVudCIsIkNsaWVudCBncm91cCBtYW5hZ2VtZW50IiwiRGlzY291bnRlcl9DaGFuZ2VDYXJkR3JvdXAiLCJXZWJBZG1pbiBDaGVja1BheW1lbnRzIiwiV2ViQWRtaW4gcGFya2luZy9hY2Nlc3Mgd2lkZ2V0IiwiV2ViQWRtaW4gUHJvZHVjdHNTb2xkV2lkZ2V0IiwiV2ViQWRtaW4gUGFzc2VzQnlQYXNzR3JvdXBXaWRnZXQiLCJWaWV3Q2FyZHMiXSwiZXhwIjoxNzQxMTE4NDUxLCJpc3MiOiJGaWRQYXJrIiwiYXVkIjoiRmlkUGFyayJ9.cdMpyl4cryHNFm24auHyNwxRv_SlkxCoCYGmbqwX03k";

export const getClients = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving customer data:", error);
        throw error;
    }
};
