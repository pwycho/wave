<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wave Bot - Commands</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --red: #dc2626;
            --dark-red: #780f0f;
            --darker-red: #4c0519;
            --dark-bg: #0f0f0f;
            --darker-bg: #070707;
            --gray: #1a1a1a;
            --light-gray: #2a2a2a;
            --text: #ffffff;
            --text-secondary: #b3b3b3;
        }

        body {
            background: linear-gradient(135deg, var(--dark-bg), var(--darker-bg));
            color: var(--text);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .background-effects {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .shape {
            position: absolute;
            background: linear-gradient(45deg, var(--red), var(--dark-red));
            border-radius: 50%;
            opacity: 0.05;
            animation: float 20s infinite ease-in-out;
        }

        .shape:nth-child(1) {
            width: 100px;
            height: 100px;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .shape:nth-child(2) {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 20%;
            animation-delay: 5s;
        }

        .shape:nth-child(3) {
            width: 80px;
            height: 80px;
            bottom: 30%;
            left: 30%;
            animation-delay: 10s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(90deg); }
            50% { transform: translateY(-40px) rotate(180deg); }
            75% { transform: translateY(-20px) rotate(270deg); }
        }

        .container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
            background: linear-gradient(135deg, var(--gray), var(--light-gray));
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(220, 38, 38, 0.3);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: slideInDown 1s ease-out;
        }

        @keyframes slideInDown {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .header h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            background: linear-gradient(45deg, var(--red), #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { text-shadow: 0 0 20px rgba(220, 38, 38, 0.5); }
            to { text-shadow: 0 0 30px rgba(220, 38, 38, 0.8); }
        }

        .header p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 10px;
        }

        .credit {
            font-size: 1rem;
            color: var(--red);
            font-weight: bold;
            margin-top: 10px;
        }

        .search-container {
            position: relative;
            margin-bottom: 40px;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .search-box {
            width: 100%;
            padding: 20px 60px 20px 20px;
            font-size: 1.1rem;
            background: var(--gray);
            border: 2px solid var(--dark-red);
            border-radius: 15px;
            color: var(--text);
            transition: all 0.3s ease;
        }

        .search-box:focus {
            outline: none;
            border-color: var(--red);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
            transform: scale(1.02);
        }

        .search-icon {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--red);
            font-size: 1.5rem;
            pointer-events: none;
        }

        .categories {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease-out 0.5s both;
        }

        .category-btn {
            padding: 12px 25px;
            background: var(--light-gray);
            border: 2px solid var(--dark-red);
            border-radius: 25px;
            color: var(--text);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .category-btn:hover, .category-btn.active {
            background: var(--red);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(220, 38, 38, 0.3);
        }

        .commands-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            animation: fadeInUp 1s ease-out 0.7s both;
        }

        .command-card {
            background: linear-gradient(135deg, var(--gray), var(--light-gray));
            border: 1px solid rgba(220, 38, 38, 0.3);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }

        .command-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .command-card:hover::before {
            left: 100%;
        }

        .command-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
            border-color: var(--red);
        }

        .command-name {
            font-size: 1.4rem;
            font-weight: bold;
            color: var(--red);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .command-prefix {
            color: var(--text-secondary);
            font-size: 1rem;
        }

        .command-usage {
            background: var(--darker-bg);
            padding: 10px 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin-bottom: 15px;
            border-left: 4px solid var(--red);
        }

        .command-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .command-permissions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 15px;
        }

        .permission-tag {
            background: var(--dark-red);
            color: var(--text);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .command-category {
            position: absolute;
            top: 10px;
            right: 15px;
            background: var(--red);
            color: var(--text);
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: bold;
            text-transform: uppercase;
        }

        .no-results {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
            font-size: 1.2rem;
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            background: var(--gray);
            border-radius: 15px;
            color: var(--text-secondary);
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @media (max-width: 768px) {
            .header h1 { font-size: 2.5rem; }
            .commands-grid { grid-template-columns: 1fr; }
            .categories { flex-direction: column; align-items: center; }
        }
    </style>
</head>
<body>
    <div class="background-effects">
        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
    </div>

    <div class="container">
        <div class="header pulse">
            <h1>Professional Discord Bot</h1>
            <p>Powerful, Professional, Red-Themed Bot</p>
            <p>Complete Command Reference & Documentation</p>
            <div class="credit">Developed by Alazeezi • 2025</div>
        </div>

        <div class="search-container">
            <input type="text" class="search-box" placeholder="Search commands..." id="searchInput">
            <div class="search-icon">🔍</div>
        </div>

        <div class="categories">
            <button class="category-btn active" data-category="all">All Commands</button>
            <button class="category-btn" data-category="core">Core</button>
            <button class="category-btn" data-category="moderation">Moderation</button>
            <button class="category-btn" data-category="utility">Utility</button>
            <button class="category-btn" data-category="fun">Fun</button>
        </div>

        <div class="commands-grid" id="commandsGrid">
            <!-- Commands will be populated by JavaScript -->
        </div>

        <div class="footer">
            <p>Wave Discord Bot • Version 1.0.0 • Python + discord.py</p>
            <p>Crafted for performance, moderation, and server management</p>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
