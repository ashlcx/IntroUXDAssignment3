/**
 * Copyright 2021 Ashley L Hines Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const gridContainerDiv = "grid-wrapper"
var menuBar = false


var toggleMenu = () => {
    if (menuBar) {
        menuBar = !menuBar
        document.getElementById(gridContainerDiv).style.gridTemplateColumns = "0px 1fr"
    } else {
        menuBar = !menuBar
        document.getElementById(gridContainerDiv).style.gridTemplateColumns = "220px 1fr"
    }
}

var scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var selectBookingPill = (id) => {
    try {
        document.getElementsByClassName("pill-active").item(0).classList.remove("pill-active")
    } catch {
        console.log("No element to remove")
    }
    console.log(`Changing pill ${id}`)
    document.getElementById(`pill-${id}`).classList.add("pill-active")
}