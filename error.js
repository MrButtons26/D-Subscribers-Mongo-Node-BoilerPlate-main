class AppError extends Error{
   
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode
        this.status=`Fail`

    Error.captureStackTrace(this,this.constructor)
    }   
}

module.exports=AppError;