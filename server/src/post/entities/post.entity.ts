import { Comment } from "../../comment/entities/comment.entity";
import { Like } from "../../like/entities/like.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'text'})
    content: string
    
    @Column({type: 'text', nullable: true})
    imageUrl?: string;

    @Column()
    createdAt: Date;

    @ManyToOne('User', 'posts', {onDelete: 'CASCADE'})
    user: User;

    @OneToMany('Like', 'post')
    like: Like[];

    @OneToMany('Comment', 'post')
    comments: Comment[];

    @Column({name: 'user_id'})
    userId: number;
}
