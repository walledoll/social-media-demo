import { Post } from "../../post/entities/post.entity";
import { User } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(['user', 'post'])
@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne('User', 'likes', {onDelete: 'CASCADE'})
    @Index()
    user: User;

    @ManyToOne('Post', 'like')
    post: Post;
}
