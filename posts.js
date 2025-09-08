// Minimal client-side data source for the blog
// Exposes window.POSTS and window.ALL_TAGS

(function () {
    const posts = [
        {
            slug: "future-of-digital-innovation",
            title: "The Future of Digital Innovation",
            date: "2024-12-15",
            excerpt:
                "Exploring how emerging technologies are reshaping our world and what it means for the next generation of creators.",
            tags: ["technology", "future", "innovation"],
            content: `
                <p>Innovation cycles are compressing. What once took a decade now happens in a few short years. The winners will be the ones who learn faster, ship smaller, and iterate with care.</p>
                <p>Three principles guide my thinking:</p>
                <ul>
                    <li>Build for clarity: make the value obvious.</li>
                    <li>Architect for change: expect requirements to evolve.</li>
                    <li>Respect energy: create systems that do more with less.</li>
                </ul>
            `
        },
        {
            slug: "building-sustainable-growth",
            title: "Building Sustainable Growth",
            date: "2024-12-10",
            excerpt:
                "Lessons learned from scaling projects while maintaining quality and purpose in an increasingly complex digital landscape.",
            tags: ["growth", "sustainability", "process"],
            content: `
                <p>Sustainable growth is less about hacks and more about systems. Clear tradeoffs, measured feedback loops, and a consistent cadence compound.</p>
                <p>Good strategy removes waste and amplifies purpose. The best growth feels calm, not chaotic.</p>
            `
        },
        {
            slug: "creative-problem-solving",
            title: "Creative Problem Solving",
            date: "2024-12-05",
            excerpt:
                "Techniques and frameworks for approaching complex challenges with creativity and systematic thinking.",
            tags: ["creativity", "systems", "thinking"],
            content: `
                <p>Constraints create creativity. Define the box, then deliberately step outside it. I like alternating modes: diverge to explore, converge to decide.</p>
            `
        },
        {
            slug: "the-power-of-simplicity",
            title: "The Power of Simplicity",
            date: "2024-11-28",
            excerpt:
                "Why less is often more in design, communication, and life. Finding clarity in an increasingly complex world.",
            tags: ["simplicity", "design", "clarity"],
            content: `
                <p>Simplicity is a service to the reader. It takes work to remove work for others. Simple systems are easier to scale, debug, and sustain.</p>
            `
        },
        {
            slug: "focus-in-a-distracted-world",
            title: "Focus in a Distracted World",
            date: "2024-11-20",
            excerpt:
                "Strategies for maintaining deep focus and productivity in an age of constant notifications and digital overwhelm.",
            tags: ["focus", "productivity", "habits"],
            content: `
                <p>Attention is our most scarce resource. Guard it. Design your environment to make the right thing the easy thing.</p>
            `
        }
    ];

    function collectTags(items) {
        const set = new Set();
        items.forEach(p => p.tags.forEach(t => set.add(t)));
        return Array.from(set).sort();
    }

    window.POSTS = posts;
    window.ALL_TAGS = collectTags(posts);
})();


