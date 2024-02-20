import dotenv from 'dotenv'
import mongoose from 'mongoose'
import ora from 'ora'
import chalk from 'chalk'

dotenv.config()

export async function connectDB() {
    try {
        const spinner = ora('Connecting to db..').start()
        await mongoose.connect(process.env.MONGO_URI)
        spinner.stop()
        console.log(chalk.greenBright("Succesfully connected to db!"))
    } catch (error) {
        console.log(chalk.redBright("Error:", error))
        process.exit(1)
    }
}

export async function disconnectDB() {
    try {
        await mongoose.disconnect()
        console.log(chalk.greenBright('Disconnected from the db.'))
    } catch (error) {
        console.log(chalk.redBright('Error: '), error);
        process.exit(1)
    }
}


connectDB()
disconnectDB()

