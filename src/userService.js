
const baseUrl = `https://jsonplaceholder.typicode.com/users`


export class UserService {
    
    async getAllUsers(){
        try{

            const response = await fetch(baseUrl)
            // const userData = await response.json()
            // console.log(userData)
            return await response.json()

        }catch(error){
            console.log("User Service :: getAllUser :: ",error.message)
            return null
        }

    }

    async createUser({name,email,phoneNo}){
        
        try {
            const response = await fetch(baseUrl,{
                method: 'POST',
                body: JSON.stringify({
                //   id:id,
                  name:name,
                  email:email,
                  phone:phoneNo,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
            // console.log(newUserData)
            const newUserData =  await response.json()
            return newUserData

        } catch (error) {
            console.log("User Service :: createUser :: ",error.message)
            return null
        }


    }

    async updateUser({id,name,userEmail,phoneNo}){
        try {
            const response = await fetch(`${baseUrl}/${id}`,{
                method: 'PUT',
                body: JSON.stringify({
                  id:id,
                  name:name,
                  email:userEmail,
                  phone:phoneNo,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })

            const updatedUserData = await response.json();
            return updatedUserData;

        } catch (error) {
            console.log("User Service :: updateUser :: ",error.message)
            return null
        }

    }

    async deleteUser(id){
        try {
            
            await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE',
              });
            
            return true
            
        } catch (error) {
            console.log("User Service :: deleteUser :: ",error.message)
            return false
        }

    }

}

const userService = new UserService();

export default userService;