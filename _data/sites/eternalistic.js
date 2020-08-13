module.exports = {
	name: "eternalistic.com", // optional, falls back to object key
	description: "Eternalistic Inc",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.eternalistic.com/",
		"https://www.eternalistic.com/about/",
		"https://www.eternalistic.com/contact/",
		// Popular Posts
		"https://www.eternalistic.com/projects/annenberg-foundation/",
		"https://www.eternalistic.com/projects/annenberg-space-for-photography/",
		"https://www.eternalistic.com/projects/linux/",
		"https://www.eternalistic.com/projects/linux-foundation/",
	]
};
