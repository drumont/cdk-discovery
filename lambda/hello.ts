import {Handler} from "aws-lambda";

export const handler: Handler = async (event, context) => {
    try {
        console.log("Event start here")
        const data = {
            "event": JSON.stringify(event),
            "author": "light"
        }
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: data
        }
    }
    catch (error: any) {
        console.log("execution error " + JSON.stringify(error))
        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message})
        }
    }

}

