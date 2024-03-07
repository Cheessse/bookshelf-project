// document.addEventListener("DOMContentLoaded", function() {
//     const loader = document.getElementById("loader");
//     const content = document.getElementById("content");

//     function showLoader() {
//         loader.style.display = "block";
//         content.style.display = "none";
//     }

//     function hideLoader() {
//         loader.style.display = "none";
//         content.style.display = "block";
//     }

//     async function fetchData() {
//         showLoader();

//         try {
//             const response = await fetch('https://example.com/data');
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         } finally {
//             hideLoader();
//         }
//     }

//     fetchData();
// });
