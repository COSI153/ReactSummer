import User from '../module/User';
// ~~~~~~~~~~~~~~~~~~~~~INSERT~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function findUserById(uid) {
    const users = await User.findOne({
        where: { user_id: uid}
    });
    console.log(users);
}



// ~~~~~~~~~~~~~~~~~~~~~DELETE~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~SELECT ONE~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~SELECT ALL~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~UPDATE~~~~~~~~~~~~~~~~~~~~~~~~~~~