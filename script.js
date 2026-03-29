// এলিমেন্টগুলো সিলেক্ট করা
const videoBtn = document.getElementById('videoBtn');
const hiddenSection = document.getElementById('hiddenSection');
const adPhoto = document.getElementById('adPhoto');

// বাটনে ক্লিক করলে যা হবে
videoBtn.addEventListener('click', function() {
    // Adsterra Direct Link এখানে দিন
    const adLink = "https://www.profitablecpmratenetwork.com/zewgw0nx?key=ad60d7740586117e41b5ee131e47e262"; 
    
    // বিজ্ঞাপন ওপেন হবে
    window.open(adLink, '_blank');

    // নিচের ফটো সেকশন দেখাবে
    hiddenSection.style.display = 'block';
    videoBtn.style.display = 'none'; // বাটনটি হাইড হয়ে যাবে
});

// ফটোতে ক্লিক করলে যতবার ক্লিক ততবার বিজ্ঞাপন
adPhoto.addEventListener('click', function() {
    const adLink = "https://www.profitablecpmratenetwork.com/zewgw0nx?key=ad60d7740586117e41b5ee131e47e262";
    window.open(adLink, '_blank');
});