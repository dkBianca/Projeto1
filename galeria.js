let currentImageIndex = 0;
const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg','img4.jpeg','img5.jpeg','img6.jpeg','img7.jpeg','img8.jpeg','img9.jpeg','img10.jpeg'];

function openModal(imageSrc) 
{
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() 
{
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    }

function nextImage() 
{
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
}

const modal = document.getElementById('myModal');
modal.addEventListener
('click', function(event) 
{
    if (event.target === modal) {
        closeModal();
    }
}
);
