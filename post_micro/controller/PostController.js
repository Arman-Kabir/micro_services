import prisma from "../config/db.config.js";

class PostController {
    static async index(req, res) {
        try {
            const posts = await prisma.post.findMany({});

            let userIds = [];
            posts.forEach((item) => {
                userIds.push(item.user_id);
            });

            // Method 1
            let postWithUsers = await Promise.all(
                posts.forEach((post)=>{
                    
                })
            )



            return res.json({ posts, userIds });
        } catch (error) {
            return res.status(500).json({ message: "Something went wrong" });
        }
    }

    static async store(req, res) {
        try {
            const authUser = req.user;
            const { title, content } = req.body;
            const post = await prisma.post.create({
                data: {
                    user_id: authUser.id,
                    title,
                    content,
                },
            });
            return res.json({ message: "Post created successfully", post });
        } catch (error) {
            return res.status(500).json({ message: "Something went wrong" });
        }
    }
}

export default PostController;