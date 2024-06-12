export function onRequest(context) {
    return new Response({ "buildNumber": 11, "buildName": "0.1.1" })
}