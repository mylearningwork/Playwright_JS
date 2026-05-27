const apiBaseUrl = Cypress.env('apiBaseUrl');

describe('JSONPlaceholder API tests', () => {
    it('gets a list of posts', () => {
        cy.request(`${apiBaseUrl}/posts`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body[0]).to.include({
                userId: 1,
                id: 1,
            });
            expect(response.body[0].title).to.be.a('string').and.not.be.empty;
        });
    });

    it('gets a single post by id', () => {
        cy.request(`${apiBaseUrl}/posts/1`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include({
                userId: 1,
                id: 1,
            });
            expect(response.body.body).to.be.a('string').and.not.be.empty;
        });
    });

    it('creates a new post', () => {
        const newPost = {
            title: 'Cypress API test post',
            body: 'Created from a Cypress API test.',
            userId: 1,
        };

        cy.request('POST', `${apiBaseUrl}/posts`, newPost).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include(newPost);
            expect(response.body.id).to.eq(101);
        });
    });

    it('updates an existing post', () => {
        const updatedPost = {
            id: 1,
            title: 'Updated Cypress API test post',
            body: 'Updated from a Cypress API test.',
            userId: 1,
        };

        cy.request('PUT', `${apiBaseUrl}/posts/1`, updatedPost).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(updatedPost);
        });
    });

    it('deletes a post', () => {
        cy.request('DELETE', `${apiBaseUrl}/posts/1`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal({});
        });
    });
});
