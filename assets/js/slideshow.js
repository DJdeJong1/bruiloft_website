document.addEventListener("DOMContentLoaded", function () {

    const photos = [
        "images/20230713_123352.jpg",
        "images/DSC_0326.JPG",
        "images/DSC_1725.JPG",
        "images/IMG-20181208-WA0008.jpg",
        "images/IMG-20211101-WA0007.jpg",
        "images/IMG-20220418-WA0002.jpg",
        "images/IMG-20220502-WA0018.jpg",
        "images/IMG-20241030-WA0028.jpg",
        "images/IMG-20250531-WA0004.jpg",
        "images/IMG-20250619-WA0005.jpg",
        "images/IMG_20191120_112832.jpg",
        "images/IMG_20200806_094149.jpg",
        "images/IMG_20210213_150546.jpg",
        "images/IMG_20210516_101220.jpg",
        "images/IMG_20220429_132938.jpg",
        "images/IMG_20220926_130104.jpg",
        "images/IMG_20221030_100826.jpg",
        "images/IMG_20221101_125610.jpg",
        "images/IMG_20230710_174448.jpg",
        "images/IMG_20230710_194120.jpg",
        "images/IMG_20240321_162936.jpg",
        "images/IMG_20240825_110410.jpg",
        "images/IMG_20241026_111254.jpg",
        "images/IMG_20250217_141224.jpg",
        "images/IMG_20250802_175546.jpg",
        "images/PXL_20251220_131939581_1.jpg",
        "images/PXL_20260517_032531103.jpg"
    ];

    let currentPhoto = 0;

    function updatePhoto() {

        const image = document.getElementById("slideshow-image");
        const counter = document.getElementById("photo-counter");

        if (!image) return;

        image.src = photos[currentPhoto];

        if (counter) {
            counter.textContent = `${currentPhoto + 1} / ${photos.length}`;
        }
    }


    document.getElementById("next-photo").addEventListener("click", function () {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        updatePhoto();

    });


    document.getElementById("previous-photo").addEventListener("click", function () {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        updatePhoto();

    });


    updatePhoto();

});
