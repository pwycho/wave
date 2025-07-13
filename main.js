const commands = [
    {
        name: "ping",
        usage: ">ping",
        description: "Display the bot's current latency in milliseconds. This command measures the round-trip time between sending a command and receiving a response, helping you assess the bot's performance and connection quality.",
        category: "core",
        permissions: []
    },
    {
        name: "info",
        usage: ">info",
        description: "Display comprehensive information about the bot including its purpose, developer, version, and key features. This command provides an overview of the bot's capabilities and technical specifications.",
        category: "core",
        permissions: []
    },
    {
        name: "invite",
        usage: ">invite",
        description: "Generate and display the bot's invite link with proper permissions. This link allows server administrators to add the bot to their Discord servers with all necessary permissions configured.",
        category: "core",
        permissions: []
    },
    {
        name: "uptime",
        usage: ">uptime",
        description: "Display how long the bot has been running continuously since its last restart. Shows the uptime in a readable format with hours, minutes, and seconds.",
        category: "core",
        permissions: []
    },
    {
        name: "stats",
        usage: ">stats",
        description: "Display detailed statistics about the bot's current status including server count, user count, memory usage, latency, uptime, Python version, and discord.py library version.",
        category: "core",
        permissions: []
    },
    {
        name: "help",
        usage: ">help",
        description: "Display a comprehensive list of all available commands organized by category. This command serves as the main reference for users to discover and understand bot functionality.",
        category: "core",
        permissions: []
    },
    {
        name: "kick",
        usage: ">kick <member> [reason]",
        description: "Remove a member from the server temporarily. The kicked member can rejoin with a new invite link. Optionally provide a reason for the kick which will be logged in the server's audit log.",
        category: "moderation",
        permissions: ["Kick Members"]
    },
    {
        name: "ban",
        usage: ">ban <member> [reason]",
        description: "Permanently ban a member from the server, preventing them from rejoining unless manually unbanned. Optionally provide a reason for the ban which will be logged in the server's audit log.",
        category: "moderation",
        permissions: ["Ban Members"]
    },
    {
        name: "unban",
        usage: ">unban <user id>",
        description: "Remove a ban from a previously banned user using their Discord user ID. This allows the user to rejoin the server if they have a valid invite link.",
        category: "moderation",
        permissions: ["Ban Members"]
    },
    {
        name: "mute",
        usage: ">mute <member> [time in seconds]",
        description: "Temporarily prevent a member from sending messages or speaking in voice channels. Default mute duration is 60 seconds. The bot automatically creates a 'Muted' role if one doesn't exist.",
        category: "moderation",
        permissions: ["Manage Roles"]
    },
    {
        name: "unmute",
        usage: ">unmute <member>",
        description: "Remove the mute status from a member, allowing them to send messages and speak in voice channels again. This command works with the 'Muted' role created by the mute command.",
        category: "moderation",
        permissions: ["Manage Roles"]
    },
    {
        name: "purge",
        usage: ">purge <amount>",
        description: "Delete a specified number of recent messages from the current channel. This is useful for cleaning up spam or unwanted content. The confirmation message auto-deletes after 4 seconds.",
        category: "moderation",
        permissions: ["Manage Messages"]
    },
    {
        name: "lock",
        usage: ">lock",
        description: "Prevent all members (except those with special permissions) from sending messages in the current channel. This is useful for stopping discussions during announcements or emergencies.",
        category: "moderation",
        permissions: ["Manage Channels"]
    },
    {
        name: "unlock",
        usage: ">unlock",
        description: "Allow all members to send messages in the current channel again. This reverses the effect of the lock command and restores normal chat functionality.",
        category: "moderation",
        permissions: ["Manage Channels"]
    },
    {
        name: "slowmode",
        usage: ">slowmode <seconds>",
        description: "Set a delay between messages that members can send in the current channel. This helps control rapid messaging and spam. Set to 0 to disable slowmode.",
        category: "moderation",
        permissions: ["Manage Channels"]
    },
    {
        name: "clearwarns",
        usage: ">clearwarns <member>",
        description: "Remove all warnings associated with a specific member. This command helps maintain a clean disciplinary record and gives members a fresh start.",
        category: "moderation",
        permissions: ["Manage Messages"]
    },
    {
        name: "serverinfo",
        usage: ">serverinfo",
        description: "Display comprehensive information about the current server including member count, creation date, boost level, verification level, owner, roles, channels, and other server statistics.",
        category: "utility",
        permissions: []
    },
    {
        name: "userinfo",
        usage: ">userinfo [member]",
        description: "Display detailed information about a specific member or yourself including account creation date, server join date, roles, status, and other user-specific details.",
        category: "utility",
        permissions: []
    },
    {
        name: "avatar",
        usage: ">avatar [member]",
        description: "Display the profile picture (avatar) of a specific member or yourself in full resolution. This command shows the avatar in an embed format for easy viewing.",
        category: "utility",
        permissions: []
    },
    {
        name: "snipe",
        usage: ">snipe [index]",
        description: "Display recently deleted messages from the current channel. By default shows the most recent deleted message, but you can specify an index (1-10) to view older deleted messages.",
        category: "utility",
        permissions: []
    },
    {
        name: "clearsnipe",
        usage: ">clearsnipe",
        description: "Clear all stored deleted messages for the current channel. This removes the message history that the snipe command can access, providing privacy control.",
        category: "utility",
        permissions: []
    },
    {
        name: "afk",
        usage: ">afk [reason]",
        description: "Set yourself as Away From Keyboard with an optional reason. The bot will notify others when they mention you and automatically remove your AFK status when you send a message.",
        category: "utility",
        permissions: []
    },
    {
        name: "remind",
        usage: ">remind <time> <reminder>",
        description: "Set a personal reminder that the bot will send you after a specified time in seconds. The bot will mention you with your reminder message when the time expires.",
        category: "utility",
        permissions: []
    },
    {
        name: "poll",
        usage: ">poll <question>",
        description: "Create a simple poll with thumbs up and thumbs down reactions. The bot automatically adds the reaction options, and members can vote by clicking the reactions.",
        category: "utility",
        permissions: []
    },
    {
        name: "coinflip",
        usage: ">coinflip",
        description: "Flip a virtual coin and get a random result of either Heads or Tails. This is a simple random decision-making tool for settling debates or making choices.",
        category: "fun",
        permissions: []
    },
    {
        name: "8ball",
        usage: ">8ball <question>",
        description: "Ask the magic 8-ball a yes/no question and receive a random response. The bot will provide various answers like 'Yes', 'No', 'Maybe', 'Ask again later', and others.",
        category: "fun",
        permissions: []
    },
    {
        name: "reverse",
        usage: ">reverse <text>",
        description: "Reverse the order of characters in any text you provide. This fun command takes your input and displays it backwards, character by character.",
        category: "fun",
        permissions: []
    },
    {
        name: "howgay",
        usage: ">howgay [member]",
        description: "Generate a random percentage (0-100%) as a playful 'gay meter' for yourself or a specified member. This is purely for entertainment and generates random results.",
        category: "fun",
        permissions: []
    }
];

let currentCategory = 'all';
let searchTerm = '';

function renderCommands() {
    const grid = document.getElementById('commandsGrid');
    const filteredCommands = commands.filter(cmd => {
        const matchesCategory = currentCategory === 'all' || cmd.category === currentCategory;
        const matchesSearch = cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredCommands.length === 0) {
        grid.innerHTML = '<div class="no-results">No commands found matching your criteria.</div>';
        return;
    }

    grid.innerHTML = filteredCommands.map(cmd => `
        <div class="command-card">
            <div class="command-category">${cmd.category}</div>
            <div class="command-name">
                <span class="command-prefix">></span>${cmd.name}
            </div>
            <div class="command-usage">${cmd.usage}</div>
            <div class="command-description">${cmd.description}</div>
            ${cmd.permissions.length > 0 ? `
                <div class="command-permissions">
                    ${cmd.permissions.map(perm => `<span class="permission-tag">${perm}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderCommands();
    });
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderCommands();
});

// Initial render
renderCommands();

// Add some dynamic effects
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.0005;
        const x = e.clientX * speed;
        const y = e.clientY * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});
