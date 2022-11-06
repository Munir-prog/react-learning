export default class PostMapper {

    static mapServerPost(post) {
        return {
            id: post.id,
            tittle: post.title,
            body: post.body
        };
    }

}