import React from 'react';

const centers = [
  { name: 'Bengaluru', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Chennai', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Delhi', img: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'North East', img: 'https://images.unsplash.com/photo-1479839655814-a4f61f9a2e63?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Kolkata', img: 'https://images.unsplash.com/photo-1503694978374-8a2fa8305c21?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Mohali', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Noida', img: 'https://images.unsplash.com/photo-1506526615598-6ce80a3a4115?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Patna', img: 'https://images.unsplash.com/photo-1555636980-3051d95ee261?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Pune', img: 'https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=200&h=200&auto=format&fit=crop' },
  { name: 'Thiruvananthapuram', img: 'https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=200&h=200&auto=format&fit=crop' }
];

export default function OurCenters() {
  return (
    <section className="py-10 bg-[#1656a2] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Centers Map Image - Blends with background */}
        <div className="flex justify-center items-center w-full" data-aos="fade-up">
          <img 
            src="/img/ourcenters.png" 
            alt="CSDAC Centers Map" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
