import type { Post } from "../../post/entities/post.entity";
import type { Like } from "../../like/entities/like.entity";
import type { Comment } from "../../comment/entities/comment.entity";

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    passwordHash: string;

    @Column({unique: true})
    username: string

    @Column({nullable: true})
    avatarUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany('Post', 'user')
    posts: Post[];

    @OneToMany('Like', 'user')
    likes: Like[];

    @OneToMany('Comment', 'user')
    comments: Comment[];
}
