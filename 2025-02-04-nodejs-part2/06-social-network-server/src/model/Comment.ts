import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Post from "./Post";
import User from "./User";

@Table({
    underscored: true
})

export default class Comment extends Model {
    //primaryKey
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //popular columns
    @ForeignKey(() => Post)
    @Column(DataType.UUID)
    postId: string

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    //Relationships
    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Post)
    post: Post
}