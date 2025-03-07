// =============================================================== START LIGHT & DARK MODE WITH LOCAL STORAGE
let color_mode_input = document.querySelector(`[name="color_mode"]`); // input => check box for color mode
let sun_and_moon = document.querySelectorAll(`.fa`);
let big_img = document.querySelector(`.doodles`);
let break_lines = document.querySelectorAll(`.brake-line`);
// console.log(break_lines);


window.addEventListener("load", () => {
    var get_local_btn_checked = localStorage.getItem("checked");

    var local_background_color = localStorage.getItem("background-color");
    var local_primary_font_color = localStorage.getItem("primary-font-color");
    var local_member_card_background_color = localStorage.getItem("member-card-background-color");
    var local_member_card_shadow = localStorage.getItem("member-card-shadow");
    var local_whats_font_color = localStorage.getItem("whats-font-color");
    var local_card_logo =localStorage.getItem('card-logo');


    if (get_local_btn_checked === "true") {
        color_mode_input.checked = true;

        document.documentElement.style.setProperty('--background-color', local_background_color || 'black');
        document.documentElement.style.setProperty('--primary-font-color', local_primary_font_color || 'white');
        document.documentElement.style.setProperty('--member-card-background-color', local_member_card_background_color || 'black');
        document.documentElement.style.setProperty('--member-card-shadow', local_member_card_shadow || '#535353');
        document.documentElement.style.setProperty('--whats-font-color', local_whats_font_color || 'black');
        document.documentElement.style.setProperty('--card-logo',local_card_logo || '#607d8b');
    } else {
        color_mode_input.checked = false;

        document.documentElement.style.setProperty('--background-color', local_background_color || 'white');
        document.documentElement.style.setProperty('--primary-font-color', local_primary_font_color || 'black');
        document.documentElement.style.setProperty('--member-card-background-color', local_member_card_background_color || 'white');
        document.documentElement.style.setProperty('--member-card-shadow', local_member_card_shadow || '#535353');
        document.documentElement.style.setProperty('--whats-font-color', local_whats_font_color || 'black');
        document.documentElement.style.setProperty('--card-logo',local_card_logo || '#d1cfcf');
    }
});

window.addEventListener("load", () => {
    var get_local_btn_checked = localStorage.getItem("checked");

    var local_sun_and_moon_one = localStorage.getItem(`colorForOne`);
    var local_sun_and_moon_Two = localStorage.getItem(`colorForTwo`);
    var local_big_img = localStorage.getItem(`filter`);
    var local_bl_filter = localStorage.getItem(`bl_filter`);


    if (get_local_btn_checked === "true") {
        color_mode_input.checked = true;

        sun_and_moon[0].style.setProperty("color", local_sun_and_moon_one || "white");
        sun_and_moon[1].style.setProperty("color", local_sun_and_moon_Two || "white");
        big_img.style.setProperty("filter", local_big_img || "brightness(0) invert(1)");
        for (let bl of break_lines) {
            bl.style.setProperty("filter", local_big_img || "brightness(0) invert(0)");
        }
    } else {
        color_mode_input.checked = false;

        sun_and_moon[0].style.setProperty("color", local_sun_and_moon_one || "black");
        sun_and_moon[1].style.setProperty("color", local_sun_and_moon_Two || "black");
        big_img.style.setProperty("filter", local_bl_filter || "invert(0)");
        for (let bl of break_lines) {
            bl.style.setProperty("filter", local_bl_filter || "invert(0)");
        }
    }
});


color_mode_input.addEventListener("click", () => {
    if (color_mode_input.checked) {
        localStorage.setItem("checked", true);

        localStorage.setItem('background-color', 'black');
        localStorage.setItem('primary-font-color', 'white');
        localStorage.setItem('member-card-background-color', 'black');
        localStorage.setItem('member-card-shadow', '#535353');
        localStorage.setItem('whats-font-color', 'black');
        localStorage.setItem('card-logo','#607d8b')

        var local_background_color = localStorage.getItem("background-color");
        var local_primary_font_color = localStorage.getItem("primary-font-color");
        var local_member_card_background_color = localStorage.getItem("member-card-background-color");
        var local_member_card_shadow = localStorage.getItem("member-card-shadow");
        var local_whats_font_color = localStorage.getItem("whats-font-color");
        var local_card_logo =localStorage.getItem('card-logo');

    } else {
        localStorage.setItem("checked", false);

        localStorage.setItem('background-color', 'white');
        localStorage.setItem('primary-font-color', 'black');
        localStorage.setItem('member-card-background-color', 'white');
        localStorage.setItem('member-card-shadow', '#535353');
        localStorage.setItem('whats-font-color', 'black');
        localStorage.setItem('card-logo','#d1cfcf')

        var local_background_color = localStorage.getItem("background-color");
        var local_primary_font_color = localStorage.getItem("primary-font-color");
        var local_member_card_background_color = localStorage.getItem("member-card-background-color");
        var local_member_card_shadow = localStorage.getItem("member-card-shadow");
        var local_whats_font_color = localStorage.getItem("whats-font-color");
        var local_card_logo = localStorage.getItem('card-logo');
    }

    document.documentElement.style.setProperty('--background-color', local_background_color);
    document.documentElement.style.setProperty('--primary-font-color', local_primary_font_color);
    document.documentElement.style.setProperty('--member-card-background-color', local_member_card_background_color);
    document.documentElement.style.setProperty('--member-card-shadow', local_member_card_shadow);
    document.documentElement.style.setProperty('--whats-font-color', local_whats_font_color);
    document.documentElement.style.setProperty('--card-logo', local_card_logo);

    // ----------------------------- THE SAME FOR THEH SWICH BUTTON
    if (color_mode_input.checked) {
        localStorage.setItem("checked", true);

        localStorage.setItem('colorForOne', 'white');
        localStorage.setItem('colorForTwo', 'white');
        localStorage.setItem('filter', 'brightness(0) invert(1)');
        localStorage.setItem('filter', 'invert(1)');

        var local_sun_and_moon_one = localStorage.getItem(`colorForOne`);
        var local_sun_and_moon_Two = localStorage.getItem(`colorForTwo`);
        var local_big_img = localStorage.getItem(`filter`);
        var local_bl_filter = localStorage.getItem(`bl_filter`);
    } else {
        localStorage.setItem("checked", false);

        localStorage.setItem('colorForOne', 'black');
        localStorage.setItem('colorForTwo', 'black');
        localStorage.setItem('filter', 'brightness(0) invert(0)');
        localStorage.setItem('filter', 'invert(0)');

        var local_sun_and_moon_one = localStorage.getItem(`colorForOne`);
        var local_sun_and_moon_Two = localStorage.getItem(`colorForTwo`);
        var local_big_img = localStorage.getItem(`filter`);
        var local_bl_filter = localStorage.getItem(`bl_filter`);
    }

    sun_and_moon[0].style.setProperty("color", local_sun_and_moon_one);
    sun_and_moon[1].style.setProperty("color", local_sun_and_moon_Two);
    big_img.style.setProperty("filter", local_big_img);
    for (let bl of break_lines) {
        bl.style.setProperty("filter", local_big_img || local_bl_filter);
    }
})
// =============================================================== END LIGHT & DARK MODE WITH LOCAL STORAGE


// =============================================================== START AUTO DARK & LIGHT MODE
setInterval(() => {
    let time_loop = () => {
        var date = new Date();
        var sec = date.getSeconds();
        var hours = date.getHours();

        // console.log(date);
        // console.log(hours);
        // console.log(sec);
        if (hours === 18) {
            let night = () => {
                // ---- SITTING THE LOCAL STORAGE
                localStorage.setItem("checked", true);
                color_mode_input.checked = true;
                // --------- THE WHOLE PAGE
                localStorage.setItem('background-color', 'black');
                localStorage.setItem('primary-font-color', 'white');
                localStorage.setItem('member-card-background-color', 'black');
                localStorage.setItem('member-card-shadow', '#535353');
                localStorage.setItem('whats-font-color', 'black');
                // --------- THE SUN, MOON AND BREAK-LINES
                localStorage.setItem('colorForOne', 'white');
                localStorage.setItem('colorForTwo', 'white');
                localStorage.setItem('filter', 'brightness(0) invert(1)');
                localStorage.setItem('filter', 'invert(1)');


                // ---- GETTING THE LOCAL STORAGE
                // --------- THE WHOLE PAGE
                var local_background_color = localStorage.getItem("background-color");
                var local_primary_font_color = localStorage.getItem("primary-font-color");
                var local_member_card_background_color = localStorage.getItem("member-card-background-color");
                var local_member_card_shadow = localStorage.getItem("member-card-shadow");
                var local_whats_font_color = localStorage.getItem("whats-font-color");
                // --------- THE SUN, MOON AND BREAK-LINES
                var local_sun_and_moon_one = localStorage.getItem(`colorForOne`);
                var local_sun_and_moon_Two = localStorage.getItem(`colorForTwo`);
                var local_big_img = localStorage.getItem(`filter`);
                var local_bl_filter = localStorage.getItem(`bl_filter`);


                // ---- CSS MASTRING
                // --------- THE WHOLE PAGE
                document.documentElement.style.setProperty('--background-color', local_background_color);
                document.documentElement.style.setProperty('--primary-font-color', local_primary_font_color);
                document.documentElement.style.setProperty('--member-card-background-color', local_member_card_background_color);
                document.documentElement.style.setProperty('--member-card-shadow', local_member_card_shadow);
                document.documentElement.style.setProperty('--whats-font-color', local_whats_font_color);
                // --------- THE SUN, MOON AND BREAK-LINES
                sun_and_moon[0].style.setProperty("color", local_sun_and_moon_one);
                sun_and_moon[1].style.setProperty("color", local_sun_and_moon_Two);
                big_img.style.setProperty("filter", local_big_img);
                for (let bl of break_lines) {
                    bl.style.setProperty("filter", local_big_img || local_bl_filter);
                }
            }
            night();

            // setTimeout(() => {
            //     console.clear();
            // }, 1000);
        } else if (hours === 6) {
            let light = () => {
                // ---- SETING THE LOCAL STORAGE
                localStorage.setItem("checked", false);
                color_mode_input.checked = false;
                // --------- THE WHOLE PAGE
                localStorage.setItem('background-color', 'white');
                localStorage.setItem('primary-font-color', 'black');
                localStorage.setItem('member-card-background-color', 'white');
                localStorage.setItem('member-card-shadow', '#535353');
                localStorage.setItem('whats-font-color', 'black');
                // --------- THE SUN, MOON AND BREAK-LINES
                localStorage.setItem('colorForOne', 'black');
                localStorage.setItem('colorForTwo', 'black');
                localStorage.setItem('filter', 'brightness(0) invert(0)');
                localStorage.setItem('filter', 'invert(0)');


                // ---- GETTING THE LOCAL STORAGE
                // --------- THE WHOLE PAGE
                var local_background_color = localStorage.getItem("background-color");
                var local_primary_font_color = localStorage.getItem("primary-font-color");
                var local_member_card_background_color = localStorage.getItem("member-card-background-color");
                var local_member_card_shadow = localStorage.getItem("member-card-shadow");
                var local_whats_font_color = localStorage.getItem("whats-font-color");
                // --------- THE SUN, MOON AND BREAK-LINES
                var local_sun_and_moon_one = localStorage.getItem(`colorForOne`);
                var local_sun_and_moon_Two = localStorage.getItem(`colorForTwo`);
                var local_big_img = localStorage.getItem(`filter`);
                var local_bl_filter = localStorage.getItem(`bl_filter`);


                // ---- CSS MASTRING
                // --------- THE WHOLE PAGE
                document.documentElement.style.setProperty('--background-color', local_background_color);
                document.documentElement.style.setProperty('--primary-font-color', local_primary_font_color);
                document.documentElement.style.setProperty('--member-card-background-color', local_member_card_background_color);
                document.documentElement.style.setProperty('--member-card-shadow', local_member_card_shadow);
                document.documentElement.style.setProperty('--whats-font-color', local_whats_font_color);
                // --------- THE SUN, MOON AND BREAK-LINES
                sun_and_moon[0].style.setProperty("color", local_sun_and_moon_one);
                sun_and_moon[1].style.setProperty("color", local_sun_and_moon_Two);
                big_img.style.setProperty("filter", local_big_img);
                for (let bl of break_lines) {
                    bl.style.setProperty("filter", local_big_img || local_bl_filter);
                }
            }
            light();

            // setTimeout(() => {
            //     console.clear();
            // }, 1000);
        }
    }
    // console.log();
    time_loop();
}, 1800000);

// ======================================================================== END AUTO DARK & LIGHT MODE


// ======================================================================== START FOCUS ON CLICK & ON OPEN
let navbar_links = document.querySelectorAll(`.navbar ul li a`);
let footerNav = document.querySelectorAll(`.second-footer nav a`);
let sections = document.querySelectorAll(`body section, body footer`);
// console.log(footerNav);

// // ---------------- FOCUS ON CLICK
for (let a of navbar_links) {
    a.addEventListener("click", function () {
        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        a.classList.add("open_now");

        let current_in_footer = document.getElementsByClassName("open_now_in_footer");
        if (current_in_footer.length > 0) {
            current_in_footer[0].className = current_in_footer[0].className.replace("open_now_in_footer", "");
        }
        for (let n of footerNav) {
            if (n.innerHTML === a.innerHTML) {
                n.classList.add("open_now_in_footer");
            }
        }
    })
}

for (let n of footerNav) {
    // let ele = footerNav[n];
    n.addEventListener("click", function () {
        let current_in_footer = document.getElementsByClassName("open_now_in_footer");
        if (current_in_footer.length > 0) {
            current_in_footer[0].className = current_in_footer[0].className.replace("open_now_in_footer", "");
        }
        n.classList.add(`open_now_in_footer`);

        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        for (let a of navbar_links) {
            if (a.innerHTML === n.innerHTML) {
                a.classList.add("open_now");
            }
        }
    })
}


// ----------------- FOCUS ON OPEN
window.addEventListener('scroll', function () {
    // get the offset top of the second section element
    var section_1_home = document.querySelector('section:nth-of-type(1)');
    var section_2_about = document.querySelector('section:nth-of-type(2)');
    var section_3_members = document.querySelector('section:nth-of-type(3)');
    var section_4_footer = document.querySelector('footer');


    // compare it with the window scroll position 
    // ----- Section One
    if (window.scrollY > section_1_home.offsetTop && window.scrollY < (section_1_home.offsetTop + section_1_home.offsetHeight - 200)) {
        // console.log(`You Are In Section 1`); // For Test
        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        navbar_links[0].classList.add(`open_now`);
    }
    //---- Section Two 
    else if (window.scrollY > section_2_about.offsetTop - 200 && window.scrollY < (section_2_about.offsetTop + section_2_about.offsetHeight - 200)) {
        // console.log(`You Are In Section 2`); // For Test
        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        navbar_links[1].classList.add(`open_now`);
    }
    //---- Section Three
    else if (window.scrollY > section_3_members.offsetTop - 200 && window.scrollY < (section_3_members.offsetTop + section_3_members.offsetHeight - 400)) {
        // console.log(`You Are In Section 3`); // For Test
        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        navbar_links[2].classList.add(`open_now`);
    }
    //---- Section Four
    else if (window.scrollY > 2000) {
        // console.log(`You Are In Section 4`); // For Test
        let current = document.getElementsByClassName("open_now");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("open_now", "");
        }
        navbar_links[3].classList.add(`open_now`);
    }
});
// =========================================================================== END FOCUS ON CLICK


// =========================================================================== START PHOEN NAV PAR
let check_box = document.getElementById("check")
let nav = document.querySelector(`.navbar ul`);
let nav_opener = document.getElementById("btn");
let nav_closer = document.getElementById("cancel");
let menu_container = document.getElementById("nav-ul");
let navbar_links_menu = document.querySelectorAll(`.navbar ul li a`);


check_box.addEventListener("click", () => {
    if (check_box.checked) {
        nav.style.setProperty("right", "0");
    } else {
        nav.style.setProperty("right", "-100%");
    }
})

for (let i of navbar_links_menu) {
    i.addEventListener("click", () => {
        if (check_box.checked) {
            nav.style.setProperty("right", "-100%");
            check_box.checked = false;
        } else {
            nav.style.setProperty("right", "0");
            check_box.checked = true;
        }
    })
}
// =========================================================================== END PHOEN NAV PAR


// window.addEventListener('scroll', function () {
//     // get the offset top of the second section element
//     var section_1_home = document.querySelector('section:nth-of-type(1)');
//     var section_2_about = document.querySelector('section:nth-of-type(2)');
//     var section_3_members = document.querySelector('section:nth-of-type(3)');
//     var section_4_footer = document.querySelector('footer');
    
//     // var section3Offset = document.querySelector('section:nth-of-type(3)').getRange;  

//     // compare it with the window scroll position 
//     // ----- Section One
//     if (window.scrollY >= section_1_home.offsetTop && window.scrollY <= (section_1_home.offsetTop + section_1_home.offsetHeight)) {
//         console.log(`You Are In Section 1`);
//     }
//     //---- Section Two 
//     else if (window.scrollY >= section_2_about.offsetTop && window.scrollY <= (section_2_about.offsetTop + section_2_about.offsetHeight)) {
//         console.log(`You Are In Section 2`);
//     }
//     //---- Section Three
//     else if (window.scrollY >= section_3_members.offsetTop && window.scrollY <= (section_3_members.offsetTop + section_3_members.offsetHeight - 400)) {
//         console.log(`You Are In Section 3`);
//     }
//     //---- Section Four
//     else if (window.scrollY === 2561) {
//         console.log(`You Are In Section 4`);
//     }
//     // section_4_footer.onmouseenter = () => {
//     //     console.log(`You Are In Section 4`);
//     // }
// });