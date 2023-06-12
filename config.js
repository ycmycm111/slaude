const config = {
    TOKEN: "xoxc-5113912268517-5129480398241-5119332797380-80e993ccce5522835730380b01b9128befd41db294e352faf31330839e3a66b7",
    COOKIE: "xoxd-pL%2Bv%2B9gXZF3WN3QoMn5Axo8lTXWvjm5xS%2Bfw34PiZ22ItAcuZzSe4SIOY5ImpRNFBjy1lPRiCFjHbL4fRdYX0H34o4i2WouimVaLFlTRMpRZjKixTnvFVDhBGuKOX132lUxqVFPYBXuNK08WKrTblF9J%2B0JVxvVT9eluUHDMKS3gRdqBURuR7%2FLNDg%3D%3D",
    TEAM_ID: "bluecny-hq",
    CHANNEL: "C05A33K66D6",
    CLAUDE_USER: "U053GNBKKRC",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;
