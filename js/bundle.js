/**
 * Copyright (c) 2021 Ashley L Hines Pty Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

var deleteRow = (row) => {
    var answer = window.confirm("Are you sure you want to cancel? this booking?");
    if (answer) {
        document.getElementById(row).remove()
    }


}