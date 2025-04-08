import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./User";


@Table({
    underscored: true
})

export default class Post extends Model {
    //primary key
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //popular columns
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    title: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    //relationships
    @BelongsTo(() => User)
    user: User
}