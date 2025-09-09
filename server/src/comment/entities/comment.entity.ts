import { Post } from "../../post/entities/post.entity";
import { User } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    content: string;
    
    @ManyToOne('User', 'comments', {onDelete:'CASCADE'})
    @Index()
    user: User;

    @ManyToOne('Post', 'comments', {onDelete: 'CASCADE'})
    @Index('idx_comments_post_id')
    post: Post;

    @CreateDateColumn()
    createdAt: Date;
}
