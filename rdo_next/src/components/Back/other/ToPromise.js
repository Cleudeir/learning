async function ToPromise(_function, params) {
  return (await new Promise(
    (resolve, reject) => {
      if(params !== undefined){
        try {
          resolve(_function(params));
        } catch (error) {
          console.error(error);
          throw new Error("Error ToPromise");
        }
      }else{
        try {
          resolve(_function());
        } catch (error) {
          console.error(error);
          throw new Error("Error ToPromise");
        }
      }
 
    },
));
}

export default ToPromise;
;