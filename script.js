/*  TAGS  */
let hidden_follower = document.querySelector("#follower");
let hidden_following = document.querySelector("#following");
let input_followers = document.querySelector("#input-followers");
let input_following = document.querySelector("#input-following");
let unfollowers_list = document.querySelector(".unfollowers");
let result_table = document.querySelector(".result-table");

document.getElementById("submit").addEventListener("click", function () {

    if (input_followers.value !== "" && input_following.value !== "") {

        let following_list = [];
        let follower_list = [];
        let unfollowers = [];

        unfollowers_list.innerHTML = "";

        hidden_follower.innerHTML = `${input_followers.value}`
        hidden_following.innerHTML = `${input_following.value}`
        let following_data = document.querySelectorAll("#following .E1N1ByPFWo4AJLHovIBQ");
        let follower_data = document.querySelectorAll("#follower .E1N1ByPFWo4AJLHovIBQ");

        following_data.forEach(u => {
            let name = u.firstElementChild.textContent.trim();
            let type = u.lastElementChild.textContent.trim();
            let user = { name: name, type: type }
            following_list.push(user);
        })

        follower_data.forEach(u => {
            let name = u.firstElementChild.textContent.trim();
            follower_list.push(name);
        })

        following_list.forEach(u => {
            if (u.type === "Profil" && follower_list.includes(u.name) === false) {
                unfollowers.push(u.name)
            }
        })

        unfollowers.forEach(unfollower => {
            unfollowers_list.innerHTML += `<li class="unfollower">${unfollower}</li>`
        })

        if (follower_list.length === 0 && following_list.length === 0) { 
            result_table.style.display = "none";
        }
        else{
            result_table.style.display = "block";
        }

        follower_list = []
        following_list = []
        input_followers.value = "";
        input_following.value = "";
    }
    else{
        result_table.style.display = "none";
    }

})


