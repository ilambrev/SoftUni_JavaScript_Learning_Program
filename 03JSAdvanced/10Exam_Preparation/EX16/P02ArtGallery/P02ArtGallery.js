class ArtGallery {
    possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };

    constructor(creator) {
        this.creator = creator;
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(a => a.articleName === articleName);

        if (article !== undefined && article.articleModel === articleModel) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const guest = this.guests.find(g => g.guestName === guestName);

        if (guest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points;
        const purchaseArticle = 0;

        switch (personality) {
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250;
                break;
            default:
                points = 50;
                break;
        }

        this.guests.push({ guestName, points, purchaseArticle });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        const article = this.listOfArticles.find(a => a.articleName === articleName);

        if (article === undefined || !this.possibleArticles.hasOwnProperty(articleModel) || article.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(g => g.guestName === guestName);

        if (guest === undefined) {
            return 'This guest is not invited.';
        }

        const articlePoints = this.possibleArticles[articleModel];

        if (guest.points < articlePoints) {
            return 'You need to more points to purchase the article.';
        }

        article.quantity -= 1;
        guest.points -= articlePoints;
        guest.purchaseArticle += 1;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        let articlesInfo = 'Articles information:';
        let guestsInfo = 'Guests information:';

        switch (criteria) {
            case 'article':
                return `${articlesInfo}\n${this.listOfArticles.map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`).join('\n')}`;
            case 'guest':
                return `${guestsInfo}\n${this.guests.map(g => `${g.guestName} - ${g.purchaseArticle}`).join('\n')}`;
        }
    }

}

// Input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// Input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// Input 4
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));