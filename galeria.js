let currentImageIndex = 0;
const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg'];

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
