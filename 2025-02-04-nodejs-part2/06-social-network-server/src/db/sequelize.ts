import { Sequelize } from "sequelize-typescript";
import User from "../model/User";
import config from "config";
import Post from "../model/Post";
import Comment from "../model/Comment";
import Follow from "../model/Follow";

const isLogging = config.get<boolean>('app.sequelizeLogging')

const sequelize = new Sequelize({
    models: [User, Post, Comment, Follow],
    logging: isLogging ? console.log : false,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize