class Story {
    #comments = [];
    #likes = [];

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        const storyLikes = this.#likes.length;

        if (storyLikes === 0) {
            return `${this.title} has 0 likes`;
        }

        if (storyLikes === 1) {
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${storyLikes - 1} others like this story!`;
    }

    like(username) {
        if (this.#likes.find(u => u === username) !== undefined) {
            throw new Error("You can't like the same story twice!");
        }

        if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const usernameIndex = this.#likes.findIndex(u => u === username);

        if (usernameIndex === -1) {
            throw new Error("You can't dislike this story!");
        }

        this.#likes.splice(usernameIndex, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        id = Number(id);
        const commentIndex = this.#comments.findIndex(c => c.id === id);

        if (id === undefined || commentIndex === -1) {
            this.#comments.push({ id: this.#comments.length + 1, username, content, replies: [] });

            return `${username} commented on ${this.title}`;
        }

        const comment = this.#comments[commentIndex];

        const reply = {
            id: `${id}.${comment.replies.length + 1}`,
            username,
            content,
        }

        comment.replies.push(reply);

        return 'You replied successfully';
    }

    toString(sortingType) {
        const sortedComments = this.#comments.slice(0);

        switch (sortingType) {
            case 'asc':
                sortedComments.sort((c1, c2) => c1.id - c2.id)
                    .forEach(c => c.replies.sort((r1, r2) => r1.id.localeCompare(r2.id)));
                break;
            case 'desc':
                sortedComments.sort((c1, c2) => c2.id - c1.id)
                    .forEach(c => c.replies.sort((r1, r2) => r2.id.localeCompare(r1.id)));
                break;
            case 'username':
                sortedComments.sort((c1, c2) => c1.username.localeCompare(c2.username))
                    .forEach(c => c.replies.sort((r1, r2) => r1.username.localeCompare(r2.username)));
                break;
        }

        const firstPartOfText = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\n`;
        const secondPartOfText = this.#comments.length > 0 ? `Comments:\n${sortedComments.map(c => {
            const commentData = `-- ${c.id}. ${c.username}: ${c.content}`;

            return c.replies.length > 0 ? `${commentData}\n${c.replies
                .map(r => `--- ${r.id}. ${r.username}: ${r.content}`)
                .join('\n')}` : commentData;
        }).join('\n')}` : 'Comments:';

        return `${firstPartOfText}${secondPartOfText}`;
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));