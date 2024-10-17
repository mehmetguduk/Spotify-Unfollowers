/*
THIS FILE WAS DEVELOPED BY MEHMET GUDUK
© 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
*/

/*  TAGS  */
let hidden_follower = document.querySelector("#follower");
let hidden_following = document.querySelector("#following");
let input_followers = document.querySelector("#input-followers");
let input_following = document.querySelector("#input-following");
let unfollowers_list = document.querySelector(".unfollowers");
let result_table = document.querySelector(".result-table");
let card_header = document.querySelector(".card-header");

document.querySelector(".fa-search").addEventListener("click", function () {

    if (input_followers.value !== "" && input_following.value !== "") {

        let following_list = [];
        let follower_list = [];
        let unfollowers = [];

        unfollowers_list.innerHTML = "";

        hidden_follower.innerHTML = `${input_followers.value}`;
        hidden_following.innerHTML = `${input_following.value}`;

        // Spotify'ın güncel HTML yapısına göre sınıf adlarını güncelle
        let following_data = document.querySelectorAll("#following .Card");
        let follower_data = document.querySelectorAll("#follower .Card");

        console.log(following_data);
        console.log(follower_data);

        following_data.forEach(u => {
            let name = u.querySelector(".CardTitle__CardText-sc-1h38un4-1").textContent; // Güncel isim
            let url = "https://open.spotify.com" + u.querySelector("a").getAttribute("href");
            let img;

            try {
                img = u.querySelector("img").getAttribute("src");
            } catch (err) {
                img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/OOjs_UI_icon_userAvatar-invert.svg/1024px-OOjs_UI_icon_userAvatar-invert.svg.png";
            }

            let user = { name: name, url: url, img: img };
            following_list.push(user);
        });

        follower_data.forEach(u => {
            let name = u.querySelector(".CardTitle__CardText-sc-1h38un4-1").textContent; // Güncel isim
            follower_list.push(name);
        });

        following_list.forEach(u => {
            if (!follower_list.includes(u.name)) {
                unfollowers.push(u);
            }
        });

        unfollowers.forEach(unfollower => {
            unfollowers_list.innerHTML += `<li class="unfollower"><img src="${unfollower.img}"><a href="${unfollower.url}">${unfollower.name}</a></li>`;
        });

        console.log(unfollowers);

        if (follower_list.length === 0 && following_list.length === 0) {
            card_header.textContent = "Unfollowers";
            result_table.style.display = "none";
        } else {
            card_header.textContent = `${unfollowers.length} Unfollowers Listed`;
            result_table.style.display = "block";
        }

        follower_list = [];
        following_list = [];
        input_followers.value = "";
        input_following.value = "";
    } else {
        result_table.style.display = "none";
    }
});

