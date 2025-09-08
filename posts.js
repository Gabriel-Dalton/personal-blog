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
            contentPath: "future-of-digital-innovation.html"
        },
        {
            slug: "building-sustainable-growth",
            title: "Building Sustainable Growth",
            date: "2024-12-10",
            excerpt:
                "Lessons learned from scaling projects while maintaining quality and purpose in an increasingly complex digital landscape.",
            tags: ["growth", "sustainability", "process"],
            contentPath: "building-sustainable-growth.html"
        },
        {
            slug: "creative-problem-solving",
            title: "Creative Problem Solving",
            date: "2024-12-05",
            excerpt:
                "Techniques and frameworks for approaching complex challenges with creativity and systematic thinking.",
            tags: ["creativity", "systems", "thinking"],
            contentPath: "creative-problem-solving.html"
        },
        {
            slug: "the-power-of-simplicity",
            title: "The Power of Simplicity",
            date: "2024-11-28",
            excerpt:
                "Why less is often more in design, communication, and life. Finding clarity in an increasingly complex world.",
            tags: ["simplicity", "design", "clarity"],
            contentPath: "the-power-of-simplicity.html"
        },
        {
            slug: "focus-in-a-distracted-world",
            title: "Focus in a Distracted World",
            date: "2024-11-20",
            excerpt:
                "Strategies for maintaining deep focus and productivity in an age of constant notifications and digital overwhelm.",
            tags: ["focus", "productivity", "habits"],
            contentPath: "focus-in-a-distracted-world.html"
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


