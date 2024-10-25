
        // Speakers Data
        const speakers = [
            {
                name: "Imran Khan",
                title: "All Rounder (ExCaptain)",
                bio: "A charismatic individual, Imran Khan Niazi, was one of the best all-rounders of his generation along with Ian Botham of England, Richard Hadlee of New Zealand and Kapil Dev of India.",
                image: "icons/Imran-Khan.webp"
            },
            {
                name: "Javed Mianda",
                title: "Batter",
                bio: "Javed Miandad was an exceptional batsman and an epitome of doggedness, scoring over 16,000 international runs with 31 centuries and 93 half-centuries.",
                image: "/icons/Javed Mianda.webp"
            },
            {
                name: "Waqar Younis",
                title: "Bowler",
                bio: "Waqar Younis, who emerged from Vehari, a remote corner of Multan in the Punjab province, had a dream start to an illustrious career, which made him one of the finest exponents of pace bowling.",
                image: "/icons/Waqar-Younis.webp"
            },
            {
                name: "Wasim Akram",
                title: "Muscian Bowler",
                bio: "Wasim Akram is undoubtedly the best left-arm fast bowler the game has seen to date. His 414 Test and 502 ODI wickets are proof of him being the most fearsome fast bowler of his generation",
                image: "/icons/Wasim-Akram.webp"
            },
            {
                name: "Fazal Mahmood",
                title: "Handsome Batter",
                bio: "Fazal Mahmood’s legacy is etched forever in Pakistan cricket. He was the first great fast bowler from the country that would go on to establish itself as one of the richest region for fast bowling.",
                image: "/icons/Fazal-Mahmood.webp"
            },
            {
                name: "Younis Khan",
                title: "Bowler",
                bio: "Some players leave an indelible mark in the world of sports either through the numbers they produce or by sheer grit and fortitude they bring to the field. ",
                image: "icons/Younis-Khan.webp"
            }
        ];

        // Populate Speakers
        const speakersGrid = document.getElementById('speakersGrid');
        speakers.forEach(speaker => {
            const speakerCard = document.createElement('div');
            speakerCard.className = 'speaker-card';
            speakerCard.innerHTML = `
                <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
                <div class="speaker-info">
                    <h3>${speaker.name}</h3>
                    <p class="speaker-title">${speaker.title}</p>
                    <p>${speaker.bio}</p>
                </div>
            `;
            speakersGrid.appendChild(speakerCard);
        });

       