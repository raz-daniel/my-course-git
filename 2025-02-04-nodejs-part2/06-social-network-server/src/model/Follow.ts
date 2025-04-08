import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./User";


@Table({
    underscored: true
})

export default class Follow extends Model {
    //popular columns
    @ForeignKey(() => User)
    @PrimaryKey
    @Column(DataType.UUID)
    followerId: string

    @ForeignKey(() => User)
    @PrimaryKey
    @Column(DataType.UUID)
    followeeId: string

    //relationships
    @BelongsTo(() => User)
    follower: User

    @BelongsTo(() => User)
    followee: User
}