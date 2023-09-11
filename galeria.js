let currentImageIndex = 0;
const images = ['imgaleria/img1.jpeg', 'imgaleria/img2.jpeg', 'imgaleria/img3.jpeg','imgaleria/img4.jpeg','imgaleria/img5.jpeg','imgaleria/img6.jpeg','imgaleria/img7.jpeg','imgaleria/img8.jpeg','imgaleria/img9.jpeg','imgaleria/img10.jpeg'];

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
