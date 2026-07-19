// Function to get car details by model name
function getCarDetails(modelName) {
    const carData = {
        "Toyota Fortuner": {
            type: "SUV",
            description: "A popular 7-seater luxury SUV known for its off-road capabilities and robust performance.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Fortuner is one of the most beloved SUVs in India, known for its reliability and powerful engine options, including a 2.7-litre petrol and a 2.8-litre diesel engine. It offers an optional four-wheel-drive setup and can comfortably accommodate up to 7 passengers, making it the perfect choice for family trips, even to destinations beyond where the roads end.",
            price: "₹33.43 - ₹51.94 Lakh*",
            specifications: {
                Engine: "2694 cc - 2755 cc",
                Power: "163.6 - 201.15 bhp",
                Torque: "245 Nm - 500 Nm",
                "Seating Capacity": "7",
                "Drive Type": "2WD / 4WD",
                Mileage: "11 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Automatic"
            },
            variants: [
                { name: "2.7L Petrol 4x2 MT", price: "Rs. 33.43 Lakh" },
                { name: "2.7L Petrol 4x2 AT", price: "Rs. 34.84 Lakh" },
                { name: "2.8L Diesel 4x2 MT", price: "Rs. 35.89 Lakh" },
                { name: "2.8L Diesel 4x2 AT", price: "Rs. 37.28 Lakh" },
                { name: "2.8L Diesel 4x4 MT", price: "Rs. 45.09 Lakh" },
                { name: "2.8L Diesel 4x4 AT", price: "Rs. 51.94 Lakh" }
            ],
            pros: [
                "Excellent off-road capabilities",
                "Spacious and comfortable interior",
                "Powerful engine options",
                "High resale value",
                "Reliable and durable"
            ],
            cons: [
                "High price compared to competitors",
                "Average fuel efficiency",
                "Stiff ride quality",
                "Limited third-row space",
                "Outdated interior design"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "14 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14 kmpl" },
                { fuelType: "Petrol", transmission: "Manual", mileage: "11 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "11 kmpl" }
            ],
            colours: [
                { name: "Phantom Brown", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/225_phantom-brown-metallic_4b403e.jpg?imwidth=480&impolicy=resize" },
                { name: "Platinum White Pearl", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/224_white-pearl-crystal-shine-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Sparkling Black Crystal Shine", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/226_sparkling-black-crystal-shine_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Avant Garde Bronze", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/223_avant-grade-bronze_77716b.jpg?imwidth=480&impolicy=resize" },
                { name: "Attitude Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/9095/1652437415106/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/227_super-white-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/headlight-43.jpg"
                
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/rear-arm-rest-close-view-194.jpg",
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAf/EAEYQAAIBAwEFBQUFBQQIBwAAAAECAwAEEQUGEiExQRMiUWFxBxQygZEjUqHB0RVCYnKxM5Lh8BYkNENTgpPxF0VUVYOU0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACURAAICAgEDBQEBAQAAAAAAAAABAhEDIRITMVEEIjJBYRSBM//aAAwDAQACEQMRAD8ALlLa7sk1DTnLW7khlYYZD1UjoR4U/pwXthj/ALVSrPUJ9C1Z57oEJI3YalCvItyEo9Rg5q0wLJ7+lrby9xhvRS/e6iuWXY6Eth9lwSPA5pYr0M0kYd13XXuyDzpVzXTOzvEVIUqVMye4pClSFAHtKlSoCz0UL2h1y10CyF1diR95t2OOMZZ28qKCqp7QdKu9SsrZrOF5uykJdUPEAjnitRpvZmTdaAr+1SIMRFo85A6vOB/QGo+sbSXG02ktYPoyRxzEMji+QFCDkHivy+Z41XxoGoLLl7CcKPGMmnjZahZxM4V4oxxYmA93zyRXWlBHK3Nk/ZW+vNkLWZDpQuZJ2y8ou0XAHIAYP9aM/wDifHG27c6ROuOe7MrfkKq8H7SniJhWSZSeEnYkgfQUy+h3juX9zmLNxOIm/SiShJ2xRc46NS2X2q0/aVZVs1kguIcF4pVAOCcA8OYo/wCnKs99m+jXllqVzdzWzwx9gYwZFxvMWBHD/lNaEOWK5MiSejrg3x2erXWK5roVg1Z0K6ArkV0KQchbi/dWuHtLaX+1t4m/mjB+dOiuxWkYbRGGm2O/ve6Qf9MU/Fa20HeigjQfwxinBTd7NHbW7PIcDxH+etNdxV9gDWN2W6kY8zy9B/2oXFbNdSbsKZ48TmvNSurqW5SEwFZ5+MIB48+FAtptom05G0zTW7SQN2MkkYGbiXqg/hHUjnyroj4INbsmahrVhps6WllbNqeoSNuoqjKk+Qzx9eVH9N2d1LUESfaW/aNcZWxs3MaKP4nGCT/Lj50thNlBolob6/xNq1yN6WQ/7sH91fCrWzboyTjzobHVDVnZ2tihitLeKBeeI1xn1OOPqeNP1AvLog4ifHpQa5upgT9q49GNcss0U6o6IYZSV2WY1weNUt7yZCdyaRfIMahSXc29kTyZ/mNZ6if0b6TX2M7dWIRY9TC7yFexugOqdD8qa2Ov37E2kj70tgd6NjzeE/pVuvbWO9tZoJVykgK8aymxupNF1ZQ5y1o5jb+OI8D64/KunE+caI5VxlZsjTRG4jIYEXC7h4/C37p/DFcEH94cQePkfD8KHaLAZrS9iSXf7UCSDrukcVOflRKQu7LI8TRmVFfdPTI4/jmoZVRfE7Oa9rnrXtZUjTieiva8AzypU7FR7XoryvRSsfEVeg0sUsHwosKOsmuJ4Y7mCS3uEDwyqUdW4hgeYNdV7RyE0M2NpBYQCCyhSCIHO4gwMmpGT1Nc17lfEfWixUe16K53l+8PrXu+v3h9aLFR1XorjtE++v1r3tE++v1p2HFjgroU0Jox+8v1rsTR/f8AwpckhcJDgrsUyJ488H/CvRcx/f8Awoc1RlY5MkChepyxzXywNxjgXflB5E9BUyW+hgjeVuIVScelVHVO3EVmkJxdXTtLcPn4VPIY8hWse9jnGlTIOu6s9nFcalEQL67b3ezc8Qgx3pPRR+VCvZfoa6vqj61LHmysvs7RW47zdW9eZz4mgO0d62uaxHZ2LEo/+rW38MQPff1Y5+QrTNPaLStJt9N08dlDCoBfq7dTXRkyRxR2RjCWR6D2pXYiKxLvb+c58qj3VwQVXe4YoS9w0soZ23jy40/eS4YelefPLKT/AA7I4UhTTkZNQJ5A2cmvZZuBFD5peNYirKN0czniais3GnGcnnUdzxq6RNg/ZfaS5lsFhlnZ5IlIG8eOPXrQu6tnltfe4VDTHeOW49aruz1zJFqEas24JMDJrRdG1Oy0bT4XvEXEqMqswzuHoa9JQUXaPPc3KNMm+ze/lns1jZXD2rhd1xg7h5Z/H6VeNooJ5bTtrLeM8ZyFXm4PMCqHs/tLZxX88lywmdkUb8C7wYAnGT48TVmm2oS+UQ2qdijDBdzxFSyQtlscqRW215495WnKlThgTgg+njXg1+RvhnY+mTVxtRaPgyvbk9Sg4n1zU03ujW4+0uYkx0ZxU+C8Gub8lEXV7t/gS6f+WNjT6XeqOMrZ3x8+yerXLtZsvb8JNQt8joCSagTe0XZiHghllP8ABEaOn+B1P0De8ar/AOlux6qRXBvNQBw0Fxmp03tT0pc9hpdxIehO6KHz+1eQqew0ZB/PL+la6Lf0Lr/p6LvUGOFtrgmnFk1c8tPu29AP1oTd+1HWBuLHaWyFgxwSTjGP1oafaTtPcoXgtnKKSCUtiwX1Io6H4Lr/AKWre1n/ANrvD/yj9a6A1k/+VXvyQfrVJh9oW013MkMLw9o57vdwORP9AaZg9outSK7SXcSlRwGBzwTj8KfQF/R+l73tWHPS77/p0u21IDjpl+P/AIjVKi2/2jFt7wGj7PeKAkcyBmpNt7RtpXyUhMuDgiO3LY+lHQD+j9LQb+7UkPZXykc827H8qS39wzEe7Xv/ANV/0qvR+1jWo4wz20LqWCneGOdEf/E7VrsiCPT7WFhgyMO8TnoM8jS/n8j/AKP0LpNeN8NpeY8TAw/KpSRXbRl3+zCjJLsFx9aC2+s3l5bm71S4Mdoc7ihiDKR4fw+dVDaDaN7yTs7dhHCDhV5fh/k016VMH6uSL3Nren2ufeNThDfw5cfVRXkG0WkSncTVot4/eV1H1IxWRtKZCcy5PXjXLRswyDkitfyYzP8AXks3AToIhL20bRHlIr7y/WmX1exh3t+6Xu890k1jlhrF7pznspSB1RhlT65rSNl9d0m/eEyW1vbago3o2EY4HHPwNRl6OK2i0fWN6ZdbcgWgndXTfXOHGCF9PyrOdstdNtazOr4muSY4/FU6n51cL3aSxNvJDNJuPu4yOKk1nl9Pb3F8zC3gvXUYAlYbqrz69K3ix0TyzsG7LBobtNRlOJDcLAB91N3PD/PSjm1G0ktjGLezfcmz35AeK8+FLVo9OhVX0XPuxu1YHOeOMVQNTvZLi6kZyS2e8apLEpyTZFZXGLSDljfalKZHe/vFHZmRN2dhn8avekWT39kJk1fUFfPNnWQeXxKaoOz3eVS5BUIY/XNXLRXk0+ZYo5R3l4qOKr508kElocJtvbCj6dq8f9le2t2oUndnjMbfVTj8KDXesGxl7DVrR7RujAiSMnyYVYpJZ5o2+1CZ4YXqKre01nvaFckd8JGWXPPI41yJpuqOlppWmS0mSVFkRgVYZBHIiuWkwelA9kpw2k4JyQ5xnwopJIOgpSgoypDjNyVsr0GzE9i63Ms8DgfAATlj5eNStTlSe20yCSORh24SSOP4mHgPWrVfQQqGKFsEd6Z2y8nlnw8hVUvFdNUsGiQBhcp2YYgA8fE13xdnE/aHRtBpenM8a6BcqyErjAOMelNvtbHJKsVtok3as26i4JOc4HCnrrY7aE3NzP8AsFboSSMVGVYY8cpKpPhU3ZzRH0DUl1LWobW3u1/2W1AXKNnHaMQ7YUAnGTknHmadBb+irXa7S6hcSxyR3C7kjKY1G4oIODy8/OvYtkdYn7zW7E+Mh/U1pg1G2XhGVB+uadXUosfEKVvwa4p/ZnUexGqdURfmKdGxWpr/AMP61oY1OHHxZ9a8OoRN1FO2LjEz47H6iOfZ/wB6uTsnqHICM5/irQjdxHqvjSE0R45FFsfFGbJspcXuo/s6buEqso3SPEj8sU7q2wd/pqBIZ2hdySySzlVI8Rug5qyy3XYbZRFDj/Ukzj+ds0R9oOqrBeaIs6mUyxyoAOuCuM8azGdzcRSilFMzW32WvbKeOdrjT1K8FL3BA5Y6oOhNdQ7NPHDKkcmlASrhx7zne4g4PDxAq7aNqek3dizykF0ZgTJEe7g8vCikEmky47NLWTPLCjNVonaM2bZm4e3W0hex7MOWCR3QPEjHhmpNhsXqQnRHkkiSQ4zDNkk+m7xrTFiscFltYgR1EdBNOvxJq+ngYB97VfUZ9aKBsrt77OJrARTsZO0XG7HIRlu9gZ/GvLPZl4tRggvJREJixOPAc6vG2WrPBqALcVVwSD0NV0alb6hM7sHF0iFVboqHC1DHPlZWUKoia7eQNE9vGitI6BIIcY3U6D6fiap9zbxm0uVDwFRIhJAIxwI8PxxV3n2fU6vFc317aQrvuxxjfK9OZHkMceFCBp0cF2kerarBc9qx7NLJgNxVOePAePj9a6IOmSltFc0ywWW1ngRY3d54HVipIGN8HhjlhuIx0olJpVgqrH7tcGLHdkEhBI8Rw49fGrXph0Ka6SCz0uS7nYgAzyE5Az1yAAOPhRu40yxHZyzbPW7PGDu7jkPGvh08+HlSb7DjHbMf1OzNrJ2TsjKfhYNnP5/WvbJJ0thcxE4tGGZF5oOYJ8qvu0GzujX8S3c/vtiI0IEqy9oqjHDKlSSPmOdDdAtNO0Z5pn1y0nWaIIyiNkBAOeox48KXcXZkhtdZbG0vV0+1nhmzHNvKcpKOPQciOI+dC9avdOv7e7Euz0sU0cJf3iByAo8eI4ii+jWEdx+0dMgWPDjtVSYBUV0bOOJGBjI50zqeh3GnQ6jeG50hI3smjCpdRhuOM4A3j0+8fSs0bb0BdIeL/Ry0SWRYy9yrbx4ADlk+QquyaDfxTGL3RyVxgZGcY9fPnRvZ90RI1Zcrw3SOJX5Vf7fSLW+tlNq6RsBns3X7In+HHFD/AC8PEGk212CMU+5ltlaX2moGnsp+z6bq739M1Z9ntUtbW539QmWJwhA+yc5zy/d8Ksc2nzWEgNykkZ6bxGPkw4H54PlUe5kAY72eI8OP9K5p5n2aOiGJd0xqfXdJKg+/Ts54fZwPw88YoDqupXmqJJbadFPHbyjdkmuF3BjyXnRaVlxxJVfGmHAZxh94eHHJqalFfRuSb+yNpdtHp9oIV74zksepp8yrnhkevKukhklYgArjrivZLWdVHwsP5hR32FUWpNJnnQXGpSe625PdTdzLJ6L09TVB27Y2l68ETNi3IdGbGccwD0zWwaHqdgdLOrX8ydvcMUj7b4nPIbo9axfbCYXOtXxPEb27XoJHDJhbT5NcjjVoERxjnFuE/wBKV3c6kGMlzbTgZOe5gNn061SLe8nhO4JypU0Ug2h1GLGLtmGQcFs8q1xBSDy3wXBftofVSfkM8vrTy6kcdy5QjzyDQyDbW/5TMkg8GQGpC7WQSf7RYWb+ZiFHEORM/aMzHPaIfRxXa39zz3WwOvMVFXWtDl/tdJgB8UJWvfedmpf9zcxH+GXhRQcgrY6nD2jG+N1u7oCLCQMHrneru81OFCrWk1xyIYTMvyxu/OhJj0Vl+x1O8iz0yDTfu1tuns9ZkB6dpHmlQ+RJsr1p9oI5HbJ7Dd+jZ/OiftVlUvoTSY3AsvPx7lBbWMW+own32K4GCMKuD051Ztr7AapY2T70KrETlpV3gAVHn5VFaz/4Ue8RnFrfCCGSPIG8eB4cOPpUr9qdoIo+0CbowWJwCc8yaInZ+Le43Omj1iH/AOq6Gz0CzqrXulbh4FgnD65ros56B41meFyIbpzg80bIolstqc020OiRPMH3rolwRx4An8q8GixxMTHdaeMZAIQcvrRDZvSI4tas5lktH7Es32UfEdxvPhSb0xpbDPtGmKXMpHLdH14VUNGv92/YEn7SIjBPDPA/lVj28ZJZ5hMxCALxX5VU/dLSPEsM83aKMrkiub069rL5XTRY9sbm2g1SOd3ictBuFZAeGSCDnFV2TWFur6zAWMJH2hyjZ58+menU01tEsmp6fb6jEzF7bEU6Z6dGqLYMt3p0lrCB7xHvTxgDi2B3h9OOP4a6EiLew9o181ndpLGylsEHeHBgeBHpxNWNNUDdiFhA7M7yl5CwB6cMDlWfwvI6LKquAeAO6cVKg1Cfl18adGrLtruooNBuFJBYpg+pqm2V4sgYbgYEHISJj4jPADh3jU3sbrUbQjeEMW8u/cSHCKTyHzorqGtW2iSvp0M3bXckIwkKgx5MW5neHTHHHiKOwh7S7p9Qn1O6Uqkk1tIc53RvEY59ONVXaCC+tdPkafVRIeAMauzZ+ean3tyNG2bSFXxPdkKueYQHJP1wKpl9eyXGEZywzk0kht6LJslbvqF1HbNMIkCl3crvYA8qvDWl/oYQ3G7Lat8NxEcoR5nofWqR7OLoQ7QIJOIaJhg+ora9oJ7LSYFvLZ42sbgH7Ne+j+nrSa2OLAFrqbSRbokyv3XAIPyrie0srnO/E1s3jHxX6H8qd/ZNtqMK3mguIi6592c91v5T09KhR3ckUzQXUbJInBkcYK1JxTKcmiDd7OS7xlgb3leZaNuP0NRFhghbdVGEieIIJ9as0LI2GifB58DT1wI7hezvIEnXo2O8PnUnBFFMqBeKPKd/DjPPgDXglwN1DvAeC5xRu62dgmAawn4jj2M3EH50NuLO6tGEVxDNFGORjGQT6j51jhRtTRF0mxsdGUJDM11dIpL3Mh7sagcQg6evPjzqk3dx20k07HJdyc4/OrVrlxHpuzc4DA3V024oHxBOAJ/E/SqZ2dvNZSTT3qxyIcR26pknzNdmG3G2ceSk6IMhVvtEOSDg4rwMeWa8jQ728M46nxrghlJGCR0xVCZ23PIpBqaZiKWTjNAh7fPjXvaN40wGzXQPkadgSYbqWFw6MMjlkZFOvfzOpBA59CR+HKoW8K9DCkAX0G4b9tQbxJDAjHyrRtor0W+k6cWB794iZAz+6enXlWW6XIE1O1YffA+taJtC8MuziJcQxTAToQshYDkfukH8a55f9UdEXeJj+mTw2WoF0trm5UoS6XVrIFzjplTRtNagLAjQ7JlyRxhfHwg/c5dPWs0WPT4g0kel24YDI3TJx8j9pUlLbTVuGiFlZ96Xs+1DSBGB65L5xxq6Il01bUfe7VY00r3ZSy5e2t3LgEZOML8qg6PdrHtDa2StcNmCUqZ42V8bp57wB61UZNO0+dzHFptuZwTuJHLIvaY4cyWHSi2xMdlDqcpt7eNHjt2+0y2+pJAIPex+FKfxY4L3Ile0CdtycjwH9RVDa7kyCrGrRtpcdqk4H7x/Oqa3Coen+JT1D9wV0rV3tLjvgOjDddG5MOoqW2nSQ3UWq7PzM6RyCRYwN5omHHGOo6elV4kY4jiPKpFpfXFrIskEjqy8irYNdBJGn7a6PFrWytvtPoETW08i9pcQRgjDcnXHiD9aomylrdXurxwXXvEcLDLMysAPKjGje0G/09ChwVY5cbowfUEEE+eM0aX2odwlIIRJ1ZbaLOfpSHoN+0/S47LYaz03S7dQJrhGITHewOZ8az3SNNg0qL3vUTukD4FALP5L5Z6/4Yk6zt3fas+7wZl+FpiML6LwH4VVLy4ub2dpLuftX/ibI+QoE2SNZ1KfUbt7mZFAK7iKPhjUcgKFqxLEmvZc5yT88VK07sXfsLgRKJGBEjJk+mc8AaYibs3de76vbSBsAuFz6/5FWu7jkubcpYXz2jROTJZs57Fz1Kj9305f1qrXeizwAS2rB2ypEQ+IE8QV8RVmlYXMVvex8O1QBwcZVwBkEfT6VPI2lZXErdB7StWltAoRzw4EHkR51aU1LTddgSDUk+1XgjhgJE/lbr6Gs4ikZOf+FS47hgcg8PCuJSknZ18U1RZdT0+90dTOri5sd7HvMYxu+Ui/uH14efSurXUw6r3qY0jaa4s2CylpI8bueoHgfvDyP4VLudJtdRQ3OhSx28mONtnETHwXPFD/AAnh4V0RyRlpkZQcSUJYZRw5+tdrdXEY3VbtF8DVTW8mtpninVo5kO66NwKmpkWqcOea24meVkPbLRmGhm7AUSp48O51+lZ8IF7MGQYH3sYL/pV62z183FsY2ICyHgviAfCqKS1xKvH5Uentx2YzVyEYy4zjAHICmU7pZWHEdKPXVq0FrGd3vsOAFCDpepNIeztJHP3hgA/WrOSRLi2D7pBxOKUb78apuAY61MOj6rcEBLN/7w/WpMGzGt47tug8i4rPOPkahLwQAi7vIVw4UcqNrsrrzDHYRD1f/Cvf9DteP+6h/v8A+FLqR8j4S8AHd8MGvCCPL0o+djteA/sIj6Sf4Uy2y2vpzsc5OBh1o6kfIcJeAPA5juInz8Lg/jV/1GdH0G47UbyoUIGeucCqdcaDrERAlsJB1wGU/wBDRK1nvZYntb2B4d1QcMMb1ZlTkmjcbUWmcaPHJq2oxWNvA5kkbACk8hRTazQb3ZtofeYZezlzuNvEDhivNm47m212yuoEciKVd91U91TwJJ8BmrR7TY7/AFfXYYLZZ7iK3tlbMSF132zkZA54A+tUsxWjO7HVrmwuBPbNNHKvJw2T+NWLYy47afULqVMymMlmJ4niKEXOlXtvvNPaXEajmzxMo+pFKykntd57fO8/dI6MtZnbVDjp2ea9P2rFc5LNy+dB54yDy4VInkZrsb/GQjAWnRZ3txETb2c8mOu5j+tZglBUxzbm7QOclRnGaeFpKRkEYNOjQ9Zcf7C/95f1p9dK18AL7rugcOJX9a3zj5M8ZeCJ2WAUY4IGcioseVfPMZ60VOi62/OBc/zCvV0HWQuPdEPnvilzj5DhLwCLowswCqQ3XzrqNe4CfnU+XZzWi+8LEk+Tr+tI6TqUSfaWMo+a/rT5R8icWDpFBbFcFN0jwNTZLC9Riz2kqgceIqQ9l2lkZUXgBx4cRWk0FNHtnqd3FElvFIFJYBWPTwwf3eNXPSdIcaHHdOpaSf7VyfE/nWdROFBVxkcuNaVsjroXT7dJSDFuhCDyGBjBqPqL46LYFsGLPE87W5OHUZwadC9RwqyalsvY6qy6hYsY5lHHcPH/ABFB3sZoGIk72OBI4fhXHaOlIiox+dTLO7ltpN+FirdT4/rSNpvJvAYI8qYMZXn8qRqgjf8AZ60yzLIsF6F3SrfBJ4cehoNKZ7WVobmMxyLzVqlxkjmTU9J45oljvreO6VfhEozu+hqsc0o6ZKeNN6M31W7a4uWd2yScc+QFSNnYZL7UAkK5xzPhQOZyWyTWl+zvTRDatcFRvvXVln046ObHHnK2GoNLCgSTjeYDqKa1HFrA8qqBurkY8elHZ14KBQDXjk20BPCR+PoOP6fWvP5NvbOykkd6Xa7sKZH7tG4YBujl9KhWk8EagM2ceVTVvYAPiP0pMNkhYlA5CnVQDpUUX9v/AMQU6t5AeUgpUGyQqCk8SBcj8a5SeJvhcGoesXq29lK694hTgDqaKDZE0xFv9QupSMoh7Fc8c7vxficfKhe2NhHa2sU6rgrKq59TirRszZG1tbeJ8FwMyMOrnix+pNDvaOg/ZESKOLXCY+RzW8fyVCn2BaQ6NY6ZFNruuXFjbXHARpE7q46r3QfxqNbXOiLDdGPVbxr3tZmS3hD9m+CxUdqU3R3N003tfZTXWx+lSQWzzNHO+VQE8KB6Ro+vLrUVnJayPE8Um5IQV4bjKoLchyXn416RxhO4vLndQpc3CrKDhWmLcvMACht6hWISMCTg5bz8zR79nSRXlpZ3IWAxxZmDHe3DvHw586kbRx6fFpVxBbB57ndBDk/D44A5UfY6AewVkl/DqF66hpVmWJWxxAxnhR6EmyvFZv7Njuvk/wCetD/Y+yyx6vbA8Q6yAH6fkaP7Q2hy4A4Mtefmb5nTi+J1NEvUA/KozRx9BivbG5FzZozE74GGz4iunUfeqRWxkRxDmKcAWvCFHUVxvKP3xQKx4qp6D6UO1CJdzuipXbJ99frTFyysnMfWtLuJgqDMkCnjnGDxrqTT1uomjjARyOg50tOxvTxH92Tn6/5NFLaMg8D6eVb5OOzLVrZk1/G9tdyxSqUdTyqXo2oSWsp3OKP8SZ4E+PlR72haeBKl9GuN7gxA61S43MbBgetdsGpx2crTg9Gq6FrrQlWhbKj4kPNatqPY61FkFY5scwOvmKx2zuGBDI26wHAirHpessrgb3ZydfBq58mCtovDKn3LTc2dxp8veU8Tw48DXvuUV8ha0AjlHOHPBj5VN0zXY7iMW92qspGMNzH8p/KvbnTOy/1nT33k54HMVzFrK3LAyOwYFWU4ZSOKnzr1eFWGWFNVi3iojukGCx6+RoIYmVmRxuupwVPSgDJ7aI3F1HGozvGts2etlt7OKNRjA41luxVl73qqnHBCP8/hWw2QCxs2MDkK6PUy3RHCtWOS4HHwoBPiXWVUnPYx8/Nj+gH1o5O2Bw61XdLb3i7uLgcpJTu/yjgPwArmRZlms0UKOGc1PRFPQUPt2CqM9KlLOMUxEsQofiVSPQU7HBD9xf7oqIk+etPLMKAJe5EB8C/QUD2g7OV7a1VAGeUMcDovH+uKJNcHHDnTcGiTTX3vlzJgBAqIOa+OaBXRIsI+ySR3IUAcSarGsJ/pNtJYaXGzpb2+9POy8yAMAeXE/hRDbW6u9L2fuGtGUSgB+9+8PAeZANCvZE8uoC/1O6wZWIiDAYyOdUhGlyMya7F00/SE06HsreadFzy3wf6ipL28jD/aJuHmP0qWedICnykzKSM42u0LULWdr+xSW6R8doAcug4/Wgtu7LAhZNwkkMjcyPOtgZc0xLZwzDEkEbj+JRVoZmjEoWYp7M7yLT9qbu3c7onLLz8Dw/qa0PW4cwhiM4GDj1rjavZOwj0y5v8ATLGCDUYVM0ckSAM27xKnxyAaH7M6k2r7PK8mHmBKnd8MnFRy+73FMelRH0S0t5nuY3Xv729nxzU+TRoeqn60PiE1lqkUhhlEbgqzFTgVYHmzUSlgZ9Fiz8J+tcfsaAfuUWaXzrgyjxoGDxo9r/whXMmm2qp/ZKflU8zDxpiWUEY4UxFeEMcGpFUXAkTj6iikCDhQu+fcvbd+m8AfnRqFabAD7TWYvdOuYMcQu+v51kMilXZSMEHFbteRjCnH8J8waxzaO0NnqkykHdYkiun08vohmjqxqymIHPiKIRy5oHCxVhjrU6OTBHHPhjrXZqqOcstlqDoArsWHj1qzaVr8sGMy7w+9zOPA+NUuzsdRmTfj0+7K+JhYA/Wne0ntZMSRyREdHQj+tc88UZdi0MjXc1O0uLS+ZWiYRTnlx7r1zrltZ4RrycQSZwGU8SPA1nlvq0kQLI5U9ePA0LvtTudVuSm+Ruje4nIFc6wu6LOaoMezSNQJXx3t3P4/4VpEIHYIPKlSrOf5hj+IO1mVorGd0+JY2I+QoZoyhLSIrw7uK9pVOPYowj2zryxTyTMccqVKgRJDlcYr2K4ds5xwrylQAT0lRLcjfGcccVYQPsuHAk4JpUq1ExIoHtHuJNyJc91mkyP5cAfnTvsZRV2VYqMEztSpVRfFmZd0X+lSpVkBUqVKmDOJUDoVbiCMH08Kx72czvb397aRkdjFO4VT4BiBSpU38GEe5rbRIVYEcD0PGqvqaCC7ZI+C55eFKlUn2NruQnJ7MN1IqP2jGlSpGhp5WFcliyknpSpUABdUJKhuoYGrHAcordSAaVKnLsgQ7cqDatnnWZe0KNRPBIB3iuTSpVTB8zGX4lPjG9IqnqQK2LZ/RLHS4kNtF9qQC0z8XPDx8PKlSq/qG0iOJbLAqK694fMcDQ/UrK3uYJBNGrbpwDilSrii3Z0ySM61u2js5R2IOGBODyqDpZzAZDjeZjnhSpV6sPicUu5//9k="
            ],
            topFeatures: [
                "Powered Front Seats",
                "Ventilated Seats",
                "Height Adjustable Driver Seat",
                "Drive Modes",
                "Cruise Control",
                "Automatic Climate Control"
            ],
            reviews: []
        },
        "Toyota Camry Hybrid": {
            type: "Sedan",
            description: "A premium sedan known for its comfort, advanced features, and hybrid technology.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Camry is a luxurious sedan that offers a blend of performance, comfort, and advanced technology. It features a hybrid powertrain that delivers excellent fuel efficiency and a smooth driving experience.",
            price: "₹41.70 Lakh*",
            specifications: {
                Engine: "2487 cc",
                Power: "176 bhp",
                Torque: "221 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "19.16 kmpl",
                "Fuel Type": "Hybrid",
                Transmission: "Automatic"
            },
            variants: [
                { name: "Hybrid", price: "Rs. 41.70 Lakh" }
            ],
            pros: [
                "Luxurious and spacious interior",
                "Excellent fuel efficiency",
                "Advanced safety features",
                "Smooth and comfortable ride",
                "High resale value"
            ],
            cons: [
                "High price compared to competitors",
                "Limited rear headroom",
                "Expensive maintenance",
                "No diesel engine option",
                "Limited boot space"
            ],
            mileage: [
                { fuelType: "Hybrid", transmission: "Automatic", mileage: "19.16 kmpl" }
            ],
            colours: [
                { name: "Platinum White Pearl", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Camry/8241/1609933145105/224_white-pearl-crystal-shine-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Graphite Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Camry/8241/1609933145105/226_graphite-metallic_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Red Mica", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Camry/8241/1609933145105/223_red-mica_77716b.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Camry/9095/1652437415106/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Attitude Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Camry/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Camry/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Camry/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Camry/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Camry/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Camry/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Camry/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Camry/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Camry/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Camry/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Hybrid Powertrain",
                "Advanced Safety Features",
                "Luxurious Interior",
                "Touchscreen Infotainment System",
                "Wireless Charging",
                "Panoramic Sunroof"
            ],
            reviews: []
        },
        "Toyota Innova Crysta": {
            type: "MPV",
            description: "A versatile and spacious MPV known for its comfort, reliability, and powerful performance.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Innova Crysta is a popular MPV that offers a perfect blend of comfort, performance, and reliability. It is available with both petrol and diesel engine options and can comfortably accommodate up to 7 passengers.",
            price: "₹17.68 - ₹25.68 Lakh*",
            specifications: {
                Engine: "2393 cc - 2694 cc",
                Power: "148 - 164 bhp",
                Torque: "245 Nm - 360 Nm",
                "Seating Capacity": "7",
                "Drive Type": "RWD",
                Mileage: "11.25 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Automatic"
            },
            variants: [
                { name: "2.7 GX 7 STR", price: "Rs. 17.68 Lakh" },
                { name: "2.7 GX 8 STR", price: "Rs. 17.73 Lakh" },
                { name: "2.7 VX 7 STR", price: "Rs. 21.21 Lakh" },
                { name: "2.7 ZX 7 STR", price: "Rs. 25.68 Lakh" }
            ],
            pros: [
                "Spacious and comfortable interior",
                "Powerful engine options",
                "High reliability and durability",
                "Good resale value",
                "Advanced safety features"
            ],
            cons: [
                "High price compared to competitors",
                "Average fuel efficiency",
                "Stiff ride quality",
                "Limited third-row space",
                "Outdated interior design"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "15.6 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14.3 kmpl" },
                { fuelType: "Petrol", transmission: "Manual", mileage: "11.25 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "10.75 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Innova-Crysta/8241/1609933145105/227_super-white-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Garnet Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Innova-Crysta/8241/1609933145105/226_garnet-red_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Avant Garde Bronze", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Innova-Crysta/8241/1609933145105/223_avant-grade-bronze_77716b.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Innova-Crysta/9095/1652437415106/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Attitude Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Innova-Crysta/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Innova-Crysta/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Innova-Crysta/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Spacious Interior",
                "Advanced Safety Features",
                "Powerful Engine Options",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Urban Cruiser Hyryder": {
            type: "SUV",
            description: "A compact SUV with hybrid technology, offering a blend of performance and fuel efficiency.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Hyryder/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Urban Cruiser Hyryder is a compact SUV that combines hybrid technology with a stylish design. It offers a comfortable ride, advanced features, and excellent fuel efficiency, making it a great choice for urban driving.",
            price: "₹10.48 - ₹18.99 Lakh*",
            specifications: {
                Engine: "1462 cc",
                Power: "101 bhp",
                Torque: "136 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "19.39 kmpl",
                "Fuel Type": "Hybrid",
                Transmission: "Automatic"
            },
            variants: [
                { name: "Hybrid E", price: "Rs. 10.48 Lakh" },
                { name: "Hybrid S", price: "Rs. 12.28 Lakh" },
                { name: "Hybrid G", price: "Rs. 14.34 Lakh" },
                { name: "Hybrid V", price: "Rs. 18.99 Lakh" }
            ],
            pros: [
                "Excellent fuel efficiency",
                "Advanced hybrid technology",
                "Stylish design",
                "Comfortable ride",
                "Good safety features"
            ],
            cons: [
                "Limited rear headroom",
                "High price for top variants",
                "Average performance",
                "Limited boot space",
                "No diesel engine option"
            ],
            mileage: [
                { fuelType: "Hybrid", transmission: "Automatic", mileage: "19.39 kmpl" }
            ],
            colours: [
                { name: "Cave Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Urban-Cruiser-Hyryder/8241/1609933145105/224_black.jpg?imwidth=480&impolicy=resize" },
                { name: "Speedy Blue", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Urban-Cruiser-Hyryder/8241/1609933145105/226_blue.jpg?imwidth=480&impolicy=resize" },
                { name: "Sporting Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Urban-Cruiser-Hyryder/8241/1609933145105/223_red.jpg?imwidth=480&impolicy=resize" },
                { name: "Cafe White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Urban-Cruiser-Hyryder/8241/1609933145105/227_white.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Urban-Cruiser-Hyryder/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Hybrid Powertrain",
                "Advanced Safety Features",
                "Stylish Design",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Glanza": {
            type: "Hatchback",
            description: "A premium hatchback offering a blend of style, performance, and advanced features.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Glanza/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Glanza is a premium hatchback that offers a stylish design, advanced features, and a comfortable ride. It is available with both petrol and hybrid engine options, making it a versatile choice for urban driving.",
            price: "₹7.34 - ₹9.30 Lakh*",
            specifications: {
                Engine: "1197 cc",
                Power: "82 bhp",
                Torque: "113 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "22.35 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Automatic"
            },
            variants: [
                { name: "G MT", price: "Rs. 7.34 Lakh" },
                { name: "G CVT", price: "Rs. 8.30 Lakh" },
                { name: "V MT", price: "Rs. 8.90 Lakh" },
                { name: "V CVT", price: "Rs. 9.30 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "22.35 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "19.56 kmpl" }
            ],
            colours: [
                { name: "Sportin Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Glanza/8241/1609933145105/224_red.jpg?imwidth=480&impolicy=resize" },
                { name: "Insta Blue", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Glanza/8241/1609933145105/226_blue.jpg?imwidth=480&impolicy=resize" },
                { name: "Gaming Grey", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Glanza/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Enticing Silver", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Glanza/8241/1609933145105/227_silver.jpg?imwidth=480&impolicy=resize" },
                { name: "Cafe White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Glanza/8241/1609933145105/221_white.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Glanza/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Glanza/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Glanza/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Glanza/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Glanza/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Glanza/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Glanza/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Glanza/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Glanza/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Land Cruiser Prado": {
            type: "SUV",
            description: "A luxury SUV known for its off-road capabilities and premium features.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser-Prado/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Land Cruiser Prado is a luxury SUV that offers a perfect blend of off-road capabilities and premium features. It is equipped with a powerful engine, advanced safety features, and a spacious interior, making it an ideal choice for both urban and adventurous driving.",
            price: "₹96.30 Lakh*",
            specifications: {
                Engine: "2982 cc",
                Power: "171 bhp",
                Torque: "410 Nm",
                "Seating Capacity": "7",
                "Drive Type": "4WD",
                Mileage: "11.13 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Automatic"
            },
            variants: [
                { name: "VX L", price: "Rs. 96.30 Lakh" }
            ],
            pros: [
                "Excellent off-road capabilities",
                "Luxurious and spacious interior",
                "Advanced safety features",
                "Powerful engine",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Large size makes it difficult to maneuver in tight spaces",
                "Expensive maintenance",
                "Limited third-row space"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Automatic", mileage: "11.13 kmpl" }
            ],
            colours: [
                { name: "White Pearl Crystal Shine", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Land-Cruiser-Prado/8241/1609933145105/224_white-pearl-crystal-shine-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Land-Cruiser-Prado/8241/1609933145105/226_black_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Land-Cruiser-Prado/8241/1609933145105/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Land-Cruiser-Prado/8241/1609933145105/223_grey-metallic_77716b.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Land-Cruiser-Prado/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Advanced Safety Features",
                "Luxurious Interior",
                "Powerful Engine",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Hilux": {
            type: "Pickup Truck",
            description: "A rugged and reliable pickup truck known for its durability and off-road capabilities.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Hilux is a rugged and reliable pickup truck that offers excellent off-road capabilities and durability. It is equipped with a powerful engine, advanced safety features, and a spacious interior, making it an ideal choice for both work and adventure.",
            price: "₹33.99 - ₹36.80 Lakh*",
            specifications: {
                Engine: "2755 cc",
                Power: "201 bhp",
                Torque: "500 Nm",
                "Seating Capacity": "5",
                "Drive Type": "4WD",
                Mileage: "10 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Automatic"
            },
            variants: [
                { name: "Standard", price: "Rs. 33.99 Lakh" },
                { name: "High", price: "Rs. 36.80 Lakh" }
            ],
            pros: [
                "Excellent off-road capabilities",
                "Durable and reliable",
                "Spacious and comfortable interior",
                "Powerful engine",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Large size makes it difficult to maneuver in tight spaces",
                "Expensive maintenance",
                "Limited rear seat space"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Automatic", mileage: "10 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Hilux/8241/1609933145105/227_super-white-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Emotional Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Hilux/8241/1609933145105/226_emotional-red_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Hilux/8241/1609933145105/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Attitude Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Hilux/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Hilux/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Hilux/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Hilux/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Hilux/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Hilux/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Hilux/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Hilux/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Hilux/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Hilux/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Advanced Safety Features",
                "Durable Build",
                "Powerful Engine",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota RAV4": {
            type: "SUV",
            description: "A compact SUV known for its stylish design, advanced features, and hybrid technology.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/RAV4/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota RAV4 is a compact SUV that offers a stylish design, advanced features, and hybrid technology. It provides a comfortable ride, excellent fuel efficiency, and a range of safety features, making it a great choice for urban and suburban driving.",
            price: "₹45.00 Lakh*",
            specifications: {
                Engine: "2487 cc",
                Power: "218 bhp",
                Torque: "221 Nm",
                "Seating Capacity": "5",
                "Drive Type": "AWD",
                Mileage: "18.58 kmpl",
                "Fuel Type": "Hybrid",
                Transmission: "Automatic"
            },
            variants: [
                { name: "Hybrid", price: "Rs. 45.00 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Excellent fuel efficiency",
                "Comfortable ride",
                "High resale value"
            ],
            cons: [
                "High price",
                "Limited rear seat space",
                "Average performance",
                "Expensive maintenance",
                "No diesel engine option"
            ],
            mileage: [
                { fuelType: "Hybrid", transmission: "Automatic", mileage: "18.58 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/RAV4/8241/1609933145105/227_super-white-metallic_d9dce2.jpg?imwidth=480&impolicy=resize" },
                { name: "Emotional Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/RAV4/8241/1609933145105/226_emotional-red_2f2c2f.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/RAV4/8241/1609933145105/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize" },
                { name: "Attitude Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/RAV4/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/RAV4/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/RAV4/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/RAV4/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/RAV4/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/RAV4/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/RAV4/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/RAV4/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/RAV4/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/RAV4/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Hybrid Powertrain",
                "Advanced Safety Features",
                "Stylish Design",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Yaris": {
            type: "Sedan",
            description: "A compact sedan known for its reliability, fuel efficiency, and advanced features.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Yaris/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Yaris is a compact sedan that offers a blend of reliability, fuel efficiency, and advanced features. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹8.76 - ₹14.18 Lakh*",
            specifications: {
                Engine: "1496 cc",
                Power: "106 bhp",
                Torque: "140 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "17.8 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Automatic"
            },
            variants: [
                { name: "J Optional", price: "Rs. 8.76 Lakh" },
                { name: "G Optional", price: "Rs. 10.56 Lakh" },
                { name: "V Optional", price: "Rs. 12.76 Lakh" },
                { name: "VX Optional", price: "Rs. 14.18 Lakh" }
            ],
            pros: [
                "Reliable and fuel-efficient",
                "Comfortable ride",
                "Advanced safety features",
                "Good build quality",
                "Affordable price"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No diesel engine option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Automatic", mileage: "17.8 kmpl" }
            ],
            colours: [
                { name: "Wildfire Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Yaris/8241/1609933145105/224_red.jpg?imwidth=480&impolicy=resize" },
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Yaris/8241/1609933145105/226_white.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Yaris/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Yaris/8241/1609933145105/227_silver.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Yaris/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Yaris/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Yaris/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Yaris/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Yaris/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Yaris/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Yaris/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Yaris/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Yaris/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Advanced Safety Features",
                "Fuel Efficiency",
                "Comfortable Ride",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Corolla Altis": {
            type: "Sedan",
            description: "A premium sedan known for its comfort, advanced features, and reliability.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Corolla-Altis/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Corolla Altis is a premium sedan that offers a blend of comfort, advanced features, and reliability. It is designed for urban driving and provides a smooth and comfortable ride with a range of safety features.",
            price: "₹16.45 - ₹20.19 Lakh*",
            specifications: {
                Engine: "1798 cc",
                Power: "138 bhp",
                Torque: "173 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "16.7 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Automatic"
            },
            variants: [
                { name: "G", price: "Rs. 16.45 Lakh" },
                { name: "GL", price: "Rs. 18.19 Lakh" },
                { name: "VL", price: "Rs. 20.19 Lakh" }
            ],
            pros: [
                "Comfortable and spacious interior",
                "Advanced safety features",
                "Smooth and comfortable ride",
                "High resale value",
                "Reliable and durable"
            ],
            cons: [
                "High price compared to competitors",
                "Average fuel efficiency",
                "Limited rear seat space",
                "No diesel engine option",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Automatic", mileage: "16.7 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Corolla-Altis/8241/1609933145105/224_white.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Corolla-Altis/8241/1609933145105/226_silver.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Corolla-Altis/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Corolla-Altis/8241/1609933145105/227_black.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Corolla-Altis/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Corolla-Altis/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Advanced Safety Features",
                "Comfortable Interior",
                "Smooth Ride",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Vios": {
            type: "Sedan",
            description: "A compact sedan offering a blend of style, performance, and advanced features.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Vios/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Vios is a compact sedan that offers a stylish design, advanced features, and a comfortable ride. It is available with both petrol and hybrid engine options, making it a versatile choice for urban driving.",
            price: "₹8.54 - ₹12.19 Lakh*",
            specifications: {
                Engine: "1496 cc",
                Power: "106 bhp",
                Torque: "140 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "17.8 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Automatic"
            },
            variants: [
                { name: "J", price: "Rs. 8.54 Lakh" },
                { name: "E", price: "Rs. 9.76 Lakh" },
                { name: "G", price: "Rs. 10.98 Lakh" },
                { name: "V", price: "Rs. 12.19 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Automatic", mileage: "17.8 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Vios/8241/1609933145105/224_white.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Vios/8241/1609933145105/226_silver.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Vios/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Vios/8241/1609933145105/227_black.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Vios/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Vios/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Vios/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Vios/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Vios/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Vios/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Vios/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Vios/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Vios/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Etios": {
            type: "Sedan",
            description: "A compact sedan known for its affordability, reliability, and fuel efficiency.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Etios/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Etios is a compact sedan that offers a blend of affordability, reliability, and fuel efficiency. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹6.90 - ₹8.90 Lakh*",
            specifications: {
                Engine: "1496 cc",
                Power: "89 bhp",
                Torque: "132 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "17.5 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Manual"
            },
            variants: [
                { name: "G", price: "Rs. 6.90 Lakh" },
                { name: "V", price: "Rs. 7.50 Lakh" },
                { name: "VX", price: "Rs. 8.10 Lakh" },
                { name: "VXD", price: "Rs. 8.90 Lakh" }
            ],
            pros: [
                "Affordable price",
                "Reliable and fuel-efficient",
                "Comfortable ride",
                "Good build quality",
                "Advanced safety features"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No diesel engine option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "17.5 kmpl" }
            ],
            colours: [
                { name: "Vermilion Red", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Etios/8241/1609933145105/224_red.jpg?imwidth=480&impolicy=resize" },
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Etios/8241/1609933145105/226_white.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Etios/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Etios/8241/1609933145105/227_silver.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Etios/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Etios/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Etios/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Etios/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Etios/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Etios/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Etios/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Etios/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Etios/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Advanced Safety Features",
                "Fuel Efficiency",
                "Comfortable Ride",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Toyota Prius": {
            type: "Hybrid",
            description: "A hybrid car known for its fuel efficiency, advanced technology, and eco-friendly design.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Prius/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
            brief: "The Toyota Prius is a hybrid car that offers a blend of fuel efficiency, advanced technology, and eco-friendly design. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹45.09 - ₹51.94 Lakh*",
            specifications: {
                Engine: "1798 cc",
                Power: "121 bhp",
                Torque: "142 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "26.27 kmpl",
                "Fuel Type": "Hybrid",
                Transmission: "Automatic"
            },
            variants: [
                { name: "Z8", price: "Rs. 45.09 Lakh" },
                { name: "Z8L", price: "Rs. 51.94 Lakh" }
            ],
            pros: [
                "Excellent fuel efficiency",
                "Advanced hybrid technology",
                "Eco-friendly design",
                "Comfortable ride",
                "Good safety features"
            ],
            cons: [
                "High price",
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option"
            ],
            mileage: [
                { fuelType: "Hybrid", transmission: "Automatic", mileage: "26.27 kmpl" }
            ],
            colours: [
                { name: "Super White", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Prius/8241/1609933145105/224_white.jpg?imwidth=480&impolicy=resize" },
                { name: "Silver Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Prius/8241/1609933145105/226_silver.jpg?imwidth=480&impolicy=resize" },
                { name: "Grey Metallic", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Prius/8241/1609933145105/223_grey.jpg?imwidth=480&impolicy=resize" },
                { name: "Black", image: "https://stimg.cardekho.com/images/car-images/360x240/Toyota/Prius/8241/1609933145105/227_black.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Prius/10903/1695443447797/front-left-side-47.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Prius/10903/1690544151440/rear-left-view-121.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Prius/10903/1690544151440/grille-97.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Prius/10903/1690544151440/front-fog-lamp-41.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Prius/10903/1690544151440/headlight-43.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Prius/10903/1690544016397/steering-wheel-54.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Prius/10903/1690544016397/instrument-cluster-62.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Prius/10903/1690544016397/gear-shifter-87.jpg",
                "https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Prius/10903/1690544016397/rear-arm-rest-close-view-194.jpg"
            ],
            topFeatures: [
                "Hybrid Powertrain",
                "Advanced Safety Features",
                "Eco-friendly Design",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Nexon": {
            type: "SUV",
            description: "A compact SUV known for its stylish design, advanced features, and safety.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11103/1736494813808/front-left-side-47.jpg?tr=w-664",
            brief: "The Tata Nexon is a compact SUV that offers a stylish design, advanced features, and a comfortable ride. It is available with both petrol and diesel engine options, making it a versatile choice for urban driving.",
            price: "₹7.19 - ₹13.23 Lakh*",
            specifications: {
                Engine: "1199 cc - 1497 cc",
                Power: "108.5 bhp",
                Torque: "170 Nm - 260 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "17.0 - 21.5 kmpl",
                "Fuel Type": "Petrol/Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 7.19 Lakh" },
                { name: "XM", price: "Rs. 8.09 Lakh" },
                { name: "XZ", price: "Rs. 9.29 Lakh" },
                { name: "XZ+", price: "Rs. 10.59 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "17.0 kmpl" },
                { fuelType: "Diesel", transmission: "Manual", mileage: "21.5 kmpl" }
            ],
            colours: [
                { name: "Foliage Green", image: "https://stimg.cardekho.com/images/car-images/360x240/Tata/Nexon/9675/1739519153339/Grassland-Beige_494636.jpg?imwidth=480&impolicy=resize" },
                { name: "Daytona Grey", image: "https://stimg.cardekho.com/images/car-images/360x240/Tata/Nexon/9675/1739519153339/Pure-Grey-DT_ababab.jpg?imwidth=480&impolicy=resize" },
                { name: "Royal Blue", image: "https://stimg.cardekho.com/images/car-images/360x240/Tata/Nexon/9675/1739519153339/Royal-Blue_141d3c.jpg?imwidth=480&impolicy=resize" },
                { name: "Ocean Blue", image: "https://stimg.cardekho.com/images/car-images/360x240/Tata/Nexon/9675/1739519153339/Pristine-White-DT_3a5460.jpg?imwidth=480&impolicy=resize" }
            ],
            exteriorImages: [
                "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11103/1736494813808/front-left-side-47.jpg?imwidth=890&impolicy=resize",
                "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11103/1694678851386/rear-left-view-121.jpg?imwidth=890&impolicy=resize",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Tata/Nexon/11103/1694678851386/rear-view-119.jpg",
                "https://stimg.cardekho.com/images/carexteriorimages/360x240/Tata/Nexon/11103/1694678851386/top-view-117.jpg"
            ],
            interiorImages: [
                "https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/9675/1736569477315/dashboard-59.jpg?imwidth=890&impolicy=resize",
                "https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/9675/1736569477315/steering-wheel-54.jpg?imwidth=890&impolicy=resize",
                "https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/9675/1736569477315/instrument-cluster-62.jpg?imwidth=890&impolicy=resize",
                "https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/9675/1694678933562/knob-selector-184.jpg?imwidth=890&impolicy=resize"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Harrier": {
            type: "SUV",
            description: "A mid-size SUV known for its powerful performance, advanced features, and spacious interior.",
            image: "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api",
            brief: "The Tata Harrier is a mid-size SUV that offers a powerful performance, advanced features, and a spacious interior. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹14.39 - ₹21.09 Lakh*",
            specifications: {
                Engine: "1956 cc",
                Power: "167.67 bhp",
                Torque: "350 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "16.35 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 14.39 Lakh" },
                { name: "XM", price: "Rs. 15.59 Lakh" },
                { name: "XT", price: "Rs. 17.19 Lakh" },
                { name: "XZ", price: "Rs. 18.79 Lakh" }
            ],
            pros: [
                "Powerful performance",
                "Advanced features",
                "Spacious interior",
                "Good build quality",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Limited rear headroom",
                "No petrol engine option",
                "Expensive maintenance"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "16.35 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14.63 kmpl" }
            ],
            colours: [
                { name: "Calypso Red", image: "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api" },
                { name: "Orcus White", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Telesto Grey", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Atlas Black", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Powerful Performance",
                "Advanced Safety Features",
                "Spacious Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Altroz": {
            type: "Hatchback",
            description: "A premium hatchback offering a blend of style, performance, and advanced features.",
            image: "https://tse3.mm.bing.net/th?id=OIP.z1KcQ8rSNvadELQN53hx-AHaE8&pid=Api",
            brief: "The Tata Altroz is a premium hatchback that offers a stylish design, advanced features, and a comfortable ride. It is available with both petrol and diesel engine options, making it a versatile choice for urban driving.",
            price: "₹5.84 - ₹9.59 Lakh*",
            specifications: {
                Engine: "1199 cc - 1497 cc",
                Power: "84.82 bhp",
                Torque: "113 Nm - 200 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "19.05 - 25.11 kmpl",
                "Fuel Type": "Petrol/Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 5.84 Lakh" },
                { name: "XM", price: "Rs. 6.69 Lakh" },
                { name: "XT", price: "Rs. 7.33 Lakh" },
                { name: "XZ", price: "Rs. 8.19 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "19.05 kmpl" },
                { fuelType: "Diesel", transmission: "Manual", mileage: "25.11 kmpl" }
            ],
            colours: [
                { name: "High Street Gold", image: "https://tse3.mm.bing.net/th?id=OIP.z1KcQ8rSNvadELQN53hx-AHaE8&pid=Api" },
                { name: "Downtown Red", image: "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api" },
                { name: "Midtown Grey", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Avenue White", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" }
            ],
            exteriorImages: [
                "https://tse3.mm.bing.net/th?id=OIP.z1KcQ8rSNvadELQN53hx-AHaE8&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api"
            ],
            interiorImages: [
                "https://tse3.mm.bing.net/th?id=OIP.z1KcQ8rSNvadELQN53hx-AHaE8&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.nn-5gHS9MWKY6InW7ztIVgHaEv&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Safari": {
            type: "SUV",
            description: "A premium SUV known for its powerful performance, advanced features, and spacious interior.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Safari is a premium SUV that offers a powerful performance, advanced features, and a spacious interior. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹14.99 - ₹23.29 Lakh*",
            specifications: {
                Engine: "1956 cc",
                Power: "167.67 bhp",
                Torque: "350 Nm",
                "Seating Capacity": "7",
                "Drive Type": "FWD",
                Mileage: "14.08 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 14.99 Lakh" },
                { name: "XM", price: "Rs. 16.39 Lakh" },
                { name: "XT", price: "Rs. 18.19 Lakh" },
                { name: "XZ", price: "Rs. 19.99 Lakh" }
            ],
            pros: [
                "Powerful performance",
                "Advanced features",
                "Spacious interior",
                "Good build quality",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Limited rear headroom",
                "No petrol engine option",
                "Expensive maintenance"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "14.08 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14.08 kmpl" }
            ],
            colours: [
                { name: "Royal Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Orcus White", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Tropical Mist", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Powerful Performance",
                "Advanced Safety Features",
                "Spacious Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Tiago": {
            type: "Hatchback",
            description: "A compact hatchback known for its affordability, fuel efficiency, and advanced features.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Tiago is a compact hatchback that offers a blend of affordability, fuel efficiency, and advanced features. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹4.99 - ₹7.05 Lakh*",
            specifications: {
                Engine: "1199 cc",
                Power: "84.82 bhp",
                Torque: "113 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "23.84 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 4.99 Lakh" },
                { name: "XM", price: "Rs. 5.69 Lakh" },
                { name: "XT", price: "Rs. 6.19 Lakh" },
                { name: "XZ", price: "Rs. 6.79 Lakh" }
            ],
            pros: [
                "Affordable price",
                "Fuel-efficient",
                "Comfortable ride",
                "Good build quality",
                "Advanced safety features"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No diesel engine option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "23.84 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "23.84 kmpl" }
            ],
            colours: [
                { name: "Flame Red", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Pearlescent White", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Victory Yellow", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Tectonic Blue", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Affordable Price",
                "Fuel Efficiency",
                "Comfortable Ride",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Punch": {
            type: "SUV",
            description: "A compact SUV known for its stylish design, advanced features, and safety.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Punch is a compact SUV that offers a stylish design, advanced features, and a comfortable ride. It is available with a petrol engine, making it a versatile choice for urban driving.",
            price: "₹5.49 - ₹9.09 Lakh*",
            specifications: {
                Engine: "1199 cc",
                Power: "84.82 bhp",
                Torque: "113 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "18.97 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "Pure", price: "Rs. 5.49 Lakh" },
                { name: "Adventure", price: "Rs. 6.39 Lakh" },
                { name: "Accomplished", price: "Rs. 7.29 Lakh" },
                { name: "Creative", price: "Rs. 8.49 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "18.97 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "18.97 kmpl" }
            ],
            colours: [
                { name: "Tropical Mist", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Atomic Orange", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Meteor Bronze", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Calypso Red", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Tigor": {
            type: "Sedan",
            description: "A compact sedan known for its stylish design, advanced features, and fuel efficiency.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Tigor is a compact sedan that offers a stylish design, advanced features, and a comfortable ride. It is available with both petrol and CNG engine options, making it a versatile choice for urban driving.",
            price: "₹5.99 - ₹8.57 Lakh*",
            specifications: {
                Engine: "1199 cc",
                Power: "84.82 bhp",
                Torque: "113 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "20.3 kmpl",
                "Fuel Type": "Petrol/CNG",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 5.99 Lakh" },
                { name: "XM", price: "Rs. 6.69 Lakh" },
                { name: "XZ", price: "Rs. 7.29 Lakh" },
                { name: "XZ+", price: "Rs. 8.57 Lakh" }
            ],
            pros: [
                "Stylish design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "20.3 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "20.3 kmpl" },
                { fuelType: "CNG", transmission: "Manual", mileage: "26.49 km/kg" }
            ],
            colours: [
                { name: "Arizona Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Deep Red", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Pure Silver", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Stylish Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Tigor NRG": {
            type: "Hatchback",
            description: "A rugged version of the Tigor, known for its sporty design and advanced features.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Tigor NRG is a rugged version of the Tigor that offers a sporty design, advanced features, and a comfortable ride. It is available with a petrol engine, making it a versatile choice for urban driving.",
            price: "₹6.57 - ₹7.12 Lakh*",
            specifications: {
                Engine: "1199 cc",
                Power: "84.82 bhp",
                Torque: "113 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "20.3 kmpl",
                "Fuel Type": "Petrol",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "Petrol MT", price: "Rs. 6.57 Lakh" },
                { name: "Petrol AMT", price: "Rs. 7.12 Lakh" }
            ],
            pros: [
                "Sporty design",
                "Advanced features",
                "Comfortable ride",
                "Good fuel efficiency",
                "Affordable price"
            ],
            cons: [
                "Limited rear headroom",
                "Average performance",
                "Limited boot space",
                "No diesel engine option",
                "High price for top variants"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "20.3 kmpl" },
                { fuelType: "Petrol", transmission: "Automatic", mileage: "20.3 kmpl" }
            ],
            colours: [
                { name: "Foresta Green", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Snow White", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Fire Red", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Cloudy Grey", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Sporty Design",
                "Advanced Safety Features",
                "Comfortable Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Zest": {
            type: "Sedan",
            description: "A compact sedan known for its affordability, reliability, and advanced features.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Zest is a compact sedan that offers a blend of affordability, reliability, and advanced features. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹5.82 - ₹9.89 Lakh*",
            specifications: {
                Engine: "1193 cc - 1248 cc",
                Power: "89 bhp",
                Torque: "140 Nm - 200 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "17.6 - 23.0 kmpl",
                "Fuel Type": "Petrol/Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 5.82 Lakh" },
                { name: "XM", price: "Rs. 6.69 Lakh" },
                { name: "XT", price: "Rs. 7.29 Lakh" },
                { name: "XZ", price: "Rs. 8.57 Lakh" }
            ],
            pros: [
                "Affordable price",
                "Reliable and fuel-efficient",
                "Comfortable ride",
                "Good build quality",
                "Advanced safety features"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No diesel engine option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "17.6 kmpl" },
                { fuelType: "Diesel", transmission: "Manual", mileage: "23.0 kmpl" }
            ],
            colours: [
                { name: "Buzz Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Venetian Red", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Sky Grey", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Platinum Silver", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Affordable Price",
                "Fuel Efficiency",
                "Comfortable Ride",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Indica": {
            type: "Hatchback",
            description: "A compact hatchback known for its affordability, fuel efficiency, and reliability.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Indica is a compact hatchback that offers a blend of affordability, fuel efficiency, and reliability. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹4.50 - ₹6.50 Lakh*",
            specifications: {
                Engine: "1193 cc - 1405 cc",
                Power: "70 bhp",
                Torque: "135 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "18.0 - 25.0 kmpl",
                "Fuel Type": "Petrol/Diesel",
                Transmission: "Manual"
            },
            variants: [
                { name: "LS", price: "Rs. 4.50 Lakh" },
                { name: "LX", price: "Rs. 5.00 Lakh" },
                { name: "VX", price: "Rs. 6.00 Lakh" },
                { name: "VXI", price: "Rs. 6.50 Lakh" }
            ],
            pros: [
                "Affordable price",
                "Fuel-efficient",
                "Reliable",
                "Comfortable ride",
                "Good build quality"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No automatic transmission option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "18.0 kmpl" },
                { fuelType: "Diesel", transmission: "Manual", mileage: "25.0 kmpl" }
            ],
            colours: [
                { name: "Mint White", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Jet Silver", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Spanish Tan", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Carbon Black", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Affordable Price",
                "Fuel Efficiency",
                "Reliable",
                "Comfortable Ride",
                "Good Build Quality"
            ],
            reviews: []
        },
        "Tata Indigo": {
            type: "Sedan",
            description: "A compact sedan known for its affordability, reliability, and fuel efficiency.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Indigo is a compact sedan that offers a blend of affordability, reliability, and fuel efficiency. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹5.00 - ₹7.50 Lakh*",
            specifications: {
                Engine: "1396 cc - 1405 cc",
                Power: "70 bhp",
                Torque: "135 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "18.0 - 25.0 kmpl",
                "Fuel Type": "Petrol/Diesel",
                Transmission: "Manual"
            },
            variants: [
                { name: "LS", price: "Rs. 5.00 Lakh" },
                { name: "LX", price: "Rs. 5.50 Lakh" },
                { name: "VX", price: "Rs. 6.50 Lakh" },
                { name: "VXI", price: "Rs. 7.50 Lakh" }
            ],
            pros: [
                "Affordable price",
                "Fuel-efficient",
                "Reliable",
                "Comfortable ride",
                "Good build quality"
            ],
            cons: [
                "Limited rear seat space",
                "Average performance",
                "No automatic transmission option",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Petrol", transmission: "Manual", mileage: "18.0 kmpl" },
                { fuelType: "Diesel", transmission: "Manual", mileage: "25.0 kmpl" }
            ],
            colours: [
                { name: "Mint White", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Jet Silver", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Spanish Tan", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Carbon Black", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Affordable Price",
                "Fuel Efficiency",
                "Reliable",
                "Comfortable Ride",
                "Good Build Quality"
            ],
            reviews: []
        },
        "Tata Hexa": {
            type: "SUV",
            description: "A mid-size SUV known for its powerful performance, advanced features, and spacious interior.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Hexa is a mid-size SUV that offers a powerful performance, advanced features, and a spacious interior. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹13.69 - ₹19.25 Lakh*",
            specifications: {
                Engine: "2179 cc",
                Power: "154 bhp",
                Torque: "400 Nm",
                "Seating Capacity": "7",
                "Drive Type": "AWD",
                Mileage: "14.4 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 13.69 Lakh" },
                { name: "XM", price: "Rs. 15.19 Lakh" },
                { name: "XT", price: "Rs. 17.19 Lakh" },
                { name: "XT 4x4", price: "Rs. 19.25 Lakh" }
            ],
            pros: [
                "Powerful performance",
                "Advanced features",
                "Spacious interior",
                "Good build quality",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Limited rear headroom",
                "No petrol engine option",
                "Expensive maintenance"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "14.4 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14.4 kmpl" }
            ],
            colours: [
                { name: "Arizona Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Deep Red", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Pure Silver", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Powerful Performance",
                "Advanced Safety Features",
                "Spacious Interior",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Sumo": {
            type: "SUV",
            description: "A rugged SUV known for its durability, spacious interior, and off-road capabilities.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Sumo is a rugged SUV that offers a blend of durability, spacious interior, and off-road capabilities. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹7.77 - ₹8.77 Lakh*",
            specifications: {
                Engine: "2956 cc",
                Power: "84 bhp",
                Torque: "250 Nm",
                "Seating Capacity": "7",
                "Drive Type": "RWD",
                Mileage: "15.3 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Manual"
            },
            variants: [
                { name: "Gold CX", price: "Rs. 7.77 Lakh" },
                { name: "Gold EX", price: "Rs. 8.27 Lakh" },
                { name: "Gold GX", price: "Rs. 8.77 Lakh" }
            ],
            pros: [
                "Rugged and durable",
                "Spacious interior",
                "Good off-road capabilities",
                "Affordable price",
                "Reliable"
            ],
            cons: [
                "Average performance",
                "No automatic transmission option",
                "Limited boot space",
                "Basic interior design",
                "High maintenance cost"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "15.3 kmpl" }
            ],
            colours: [
                { name: "Mint White", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Jet Silver", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Spanish Tan", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Carbon Black", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Rugged and Durable",
                "Spacious Interior",
                "Good Off-road Capabilities",
                "Affordable Price",
                "Reliable"
            ],
            reviews: []
        },
        "Tata Aria": {
            type: "SUV",
            description: "A versatile SUV known for its spacious interior, advanced features, and powerful performance.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Aria is a versatile SUV that offers a blend of spacious interior, advanced features, and powerful performance. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹10.00 - ₹15.00 Lakh*",
            specifications: {
                Engine: "2179 cc",
                Power: "148 bhp",
                Torque: "320 Nm",
                "Seating Capacity": "7",
                "Drive Type": "AWD",
                Mileage: "15.05 kmpl",
                "Fuel Type": "Diesel",
                Transmission: "Manual/Automatic"
            },
            variants: [
                { name: "Pure LX", price: "Rs. 10.00 Lakh" },
                { name: "Pleasure", price: "Rs. 12.00 Lakh" },
                { name: "Prestige", price: "Rs. 13.50 Lakh" },
                { name: "Pride", price: "Rs. 15.00 Lakh" }
            ],
            pros: [
                "Spacious interior",
                "Advanced features",
                "Powerful performance",
                "Good build quality",
                "High resale value"
            ],
            cons: [
                "High price",
                "Average fuel efficiency",
                "Limited rear headroom",
                "No petrol engine option",
                "Expensive maintenance"
            ],
            mileage: [
                { fuelType: "Diesel", transmission: "Manual", mileage: "15.05 kmpl" },
                { fuelType: "Diesel", transmission: "Automatic", mileage: "14.00 kmpl" }
            ],
            colours: [
                { name: "Quartz Black", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Arctic Silver", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Pearl White", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Night Shade Black", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Spacious Interior",
                "Advanced Safety Features",
                "Powerful Performance",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Tiago EV": {
            type: "Hatchback",
            description: "An electric hatchback known for its eco-friendly design, advanced features, and affordability.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Tiago EV is an electric hatchback that offers a blend of eco-friendly design, advanced features, and affordability. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹6.00 - ₹8.00 Lakh*",
            specifications: {
                Engine: "Electric",
                Power: "74 bhp",
                Torque: "170 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "213 km/charge",
                "Fuel Type": "Electric",
                Transmission: "Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 6.00 Lakh" },
                { name: "XM", price: "Rs. 6.50 Lakh" },
                { name: "XT", price: "Rs. 7.00 Lakh" },
                { name: "XZ+", price: "Rs. 8.00 Lakh" }
            ],
            pros: [
                "Eco-friendly design",
                "Advanced features",
                "Affordable price",
                "Good build quality",
                "Low running cost"
            ],
            cons: [
                "Limited range",
                "Average performance",
                "Limited rear seat space",
                "Limited boot space",
                "Basic interior design"
            ],
            mileage: [
                { fuelType: "Electric", transmission: "Automatic", mileage: "213 km/charge" }
            ],
            colours: [
                { name: "Teal Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Pearlescent White", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Victory Yellow", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Eco-friendly Design",
                "Advanced Safety Features",
                "Affordable Price",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Nexon EV": {
            type: "SUV",
            description: "An electric SUV known for its eco-friendly design, advanced features, and powerful performance.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Nexon EV is an electric SUV that offers a blend of eco-friendly design, advanced features, and powerful performance. It is designed for both urban and off-road driving, providing a comfortable ride with a range of safety features.",
            price: "₹13.99 - ₹16.85 Lakh*",
            specifications: {
                Engine: "Electric",
                Power: "127 bhp",
                Torque: "245 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "312 km/charge",
                "Fuel Type": "Electric",
                Transmission: "Automatic"
            },
            variants: [
                { name: "XM", price: "Rs. 13.99 Lakh" },
                { name: "XZ+", price: "Rs. 15.25 Lakh" },
                { name: "XZ+ Lux", price: "Rs. 16.85 Lakh" }
            ],
            pros: [
                "Eco-friendly design",
                "Advanced features",
                "Powerful performance",
                "Good build quality",
                "Low running cost"
            ],
            cons: [
                "High price",
                "Limited range",
                "Average performance",
                "Limited rear seat space",
                "Limited boot space"
            ],
            mileage: [
                { fuelType: "Electric", transmission: "Automatic", mileage: "312 km/charge" }
            ],
            colours: [
                { name: "Signature Teal Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Glacier White", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Moonlit Silver", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Eco-friendly Design",
                "Advanced Safety Features",
                "Powerful Performance",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Tata Altroz EV": {
            type: "Hatchback",
            description: "An electric hatchback known for its eco-friendly design, advanced features, and stylish design.",
            image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
            brief: "The Tata Altroz EV is an electric hatchback that offers a blend of eco-friendly design, advanced features, and stylish design. It is designed for urban driving and provides a comfortable ride with a range of safety features.",
            price: "₹12.00 - ₹14.00 Lakh*",
            specifications: {
                Engine: "Electric",
                Power: "127 bhp",
                Torque: "245 Nm",
                "Seating Capacity": "5",
                "Drive Type": "FWD",
                Mileage: "250 km/charge",
                "Fuel Type": "Electric",
                Transmission: "Automatic"
            },
            variants: [
                { name: "XE", price: "Rs. 12.00 Lakh" },
                { name: "XM", price: "Rs. 13.00 Lakh" },
                { name: "XZ+", price: "Rs. 14.00 Lakh" }
            ],
            pros: [
                "Eco-friendly design",
                "Advanced features",
                "Stylish design",
                "Good build quality",
                "Low running cost"
            ],
            cons: [
                "High price",
                "Limited range",
                "Average performance",
                "Limited rear seat space",
                "Limited boot space"
            ],
            mileage: [
                { fuelType: "Electric", transmission: "Automatic", mileage: "250 km/charge" }
            ],
            colours: [
                { name: "Teal Blue", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Daytona Grey", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
                { name: "Pearlescent White", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
                { name: "Victory Yellow", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" }
            ],
            exteriorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            interiorImages: [
                "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
                "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
                "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
            ],
            topFeatures: [
                "Eco-friendly Design",
                "Advanced Safety Features",
                "Stylish Design",
                "Touchscreen Infotainment System",
                "Automatic Climate Control",
                "Cruise Control"
            ],
            reviews: []
        },
        "Hyundai Creta": {
    type: "SUV",
    description: "A stylish and feature-packed compact SUV offering a blend of comfort, advanced technology, and performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
    brief: "The Hyundai Creta is a popular compact SUV known for its bold design, spacious interior, and a range of advanced features. It offers a comfortable and enjoyable driving experience, making it a preferred choice for many.",
    price: "₹10.87 - ₹19.20 Lakh*",
    specifications: {
        Engine: "1.5L MPi Petrol / 1.5L U2 CRDi Diesel",
        Power: "113.18 bhp (Petrol) / 113.42 bhp (Diesel)",
        Torque: "144.15 Nm (Petrol) / 250 Nm (Diesel)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "16.8 km/l (Petrol) / 21.4 km/l (Diesel)",
        "Fuel Type": "Petrol/Diesel",
        Transmission: "6-speed Manual / IVT (Petrol) | 6-speed Manual / 6-speed Automatic (Diesel)"
    },
    variants: [
        { name: "E", price: "₹10.87 Lakh" },
        { name: "EX", price: "₹11.90 Lakh" },
        { name: "S", price: "₹13.60 Lakh" },
        { name: "S(O)", price: "₹14.50 Lakh" },
        { name: "SX", price: "₹15.70 Lakh" },
        { name: "SX Tech", price: "₹17.20 Lakh" },
        { name: "SX(O)", price: "₹19.20 Lakh" }
    ],
    pros: [
        "Modern and attractive design",
        "Spacious and comfortable interior",
        "Advanced safety features",
        "Multiple engine options",
        "High fuel efficiency"
    ],
    cons: [
        "Higher variants are relatively expensive",
        "No all-wheel-drive option",
        "Rear seat could offer better thigh support",
        "Some competitors offer more powerful engines",
        "No manual transmission option for higher trims"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "16.8 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "16.9 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "21.4 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "19.9 km/l" }
    ],
    colours: [
        { name: "Polar White", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
        { name: "Typhoon Silver", image: "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" },
        { name: "Phantom Black", image: "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api" },
        { name: "Lava Orange", image: "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api" },
        { name: "Deep Forest", image: "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.3VpwXz6qQLaezAzXmOVDCQHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.XywNnt96_V3684r8ZkNAcQHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.ff1Y_wBp_bhDwftiyB3vEgHaE8&pid=Api"
    ],
    topFeatures: [
        "10.25-inch touchscreen infotainment system",
        "Panoramic sunroof",
        "Ventilated front seats",
        "Wireless charging",
        "BlueLink connected car technology",
        "Bose premium sound system"
    ],
    reviews: []
},
"Hyundai i20": {
    type: "Hatchback",
    description: "A premium hatchback with a stylish design, packed with features for a smooth drive.",
    image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
    brief: "The Hyundai i20 is a premium hatchback that offers a balance of style, comfort, and advanced features. It is designed for urban commuters seeking efficiency without compromising on performance.",
    price: "₹7.04 - ₹11.07 Lakh*",
    specifications: {
        Engine: "1197 cc Petrol",
        Power: "83 PS",
        Torque: "114 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "20.35 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual/Automatic"
    },
    variants: [
        { name: "Era", price: "₹7.04 Lakh" },
        { name: "Magna", price: "₹7.76 Lakh" },
        { name: "Sportz", price: "₹8.70 Lakh" },
        { name: "Asta", price: "₹9.48 Lakh" },
        { name: "Asta (O)", price: "₹11.07 Lakh" }
    ],
    pros: [
        "Stylish design",
        "Feature-rich interior",
        "Good fuel efficiency",
        "Comfortable ride quality",
        "Reliable performance"
    ],
    cons: [
        "Higher variants are pricey",
        "Rear seat space could be better",
        "Limited boot space",
        "No diesel engine option",
        "Average after-sales service"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "20.35 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "19.65 km/l" }
    ],
    colours: [
        { name: "Polar White", image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api" },
        { name: "Typhoon Silver", image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api" },
        { name: "Fiery Red", image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api" },
        { name: "Starry Night", image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api" },
        { name: "Titan Grey", image: "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.AT_bMqm7yJWaqMWgNPaC8wHaFj&pid=Api"
    ],
    topFeatures: [
        "10.25-inch touchscreen infotainment system",
        "Wireless charging",
        "Ambient lighting",
        "Cruise control",
        "Automatic climate control",
        "Rearview camera"
    ],
    reviews: []
},
"Hyundai Verna": {
    type: "Sedan",
    description: "A feature-rich sedan with a focus on comfort and performance.",
    image: "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api",
    brief: "The Hyundai Verna is a stylish and powerful sedan designed for comfort and performance. It comes equipped with modern features and a premium cabin, making it a popular choice in the sedan segment.",
    price: "₹11.00 - ₹17.42 Lakh*",
    specifications: {
        Engine: "1482 cc - 1497 cc Petrol",
        Power: "115 - 160 PS",
        Torque: "144 - 253 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18.60 - 20.60 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual/Automatic"
    },
    variants: [
        { name: "EX", price: "₹11.00 Lakh" },
        { name: "S", price: "₹11.96 Lakh" },
        { name: "SX", price: "₹12.99 Lakh" },
        { name: "SX (O)", price: "₹14.66 Lakh" },
        { name: "SX Turbo", price: "₹17.42 Lakh" }
    ],
    pros: [
        "Premium and spacious cabin",
        "Powerful engine options",
        "Feature-loaded interior",
        "High safety ratings",
        "Smooth ride quality"
    ],
    cons: [
        "No diesel engine option",
        "Slightly expensive higher variants",
        "Limited rear headroom for taller passengers",
        "Firm suspension at low speeds",
        "No AWD option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "20.60 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "19.60 km/l" }
    ],
    colours: [
        { name: "Fiery Red", image: "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api" },
        { name: "Titan Grey", image: "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api" },
        { name: "Atlas White", image: "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api" },
        { name: "Abyss Black", image: "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api" }
    ],
    exteriorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api"
    ],
    interiorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.5GdcX2PzIC7Jr5p5tv5JNAHaEo&pid=Api"
    ],
    topFeatures: [
        "ADAS (Advanced Driver Assistance System)",
        "10.25-inch touchscreen infotainment system",
        "Ventilated front seats",
        "Bose premium sound system",
        "Electric sunroof",
        "Digital driver display"
    ],
    reviews: []
},
"Hyundai Kona Electric": {
    type: "SUV",
    description: "An electric SUV that blends sustainability with style and performance.",
    image: "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api",
    brief: "The Hyundai Kona Electric is a modern electric SUV that offers a perfect blend of sustainability, performance, and premium features. It provides an impressive range and cutting-edge technology for a smooth and eco-friendly ride.",
    price: "₹23.84 - ₹24.03 Lakh*",
    specifications: {
        Engine: "Electric",
        Power: "136 - 204 PS",
        Torque: "395 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "452 km/charge",
        "Fuel Type": "Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Premium", price: "₹23.84 Lakh" },
        { name: "Premium Dual Tone", price: "₹24.03 Lakh" }
    ],
    pros: [
        "Long driving range",
        "Feature-rich and premium cabin",
        "Zero emissions",
        "Fast charging capability",
        "Smooth and silent drive"
    ],
    cons: [
        "Expensive compared to ICE SUVs",
        "Limited charging infrastructure",
        "No AWD option",
        "Low ground clearance for an SUV",
        "Limited boot space"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "452 km/charge" }
    ],
    colours: [
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api" },
        { name: "Phantom Black", image: "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api" },
        { name: "Typhoon Silver", image: "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api" },
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.WVRhAEOUqQ9yHtHoxEpjXwHaE8&pid=Api"
    ],
    topFeatures: [
        "10.25-inch touchscreen infotainment system",
        "Wireless charging",
        "Electric sunroof",
        "Leather upholstery",
        "7 airbags",
        "Regenerative braking"
    ],
    reviews: []
},
"Hyundai Tucson": {
    type: "SUV",
    description: "A mid-size SUV with premium features and performance, offering a balance of comfort and utility.",
    image: "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api",
    brief: "The Hyundai Tucson is a premium mid-size SUV that combines stylish design, advanced technology, and powerful performance. It offers a comfortable ride with a spacious cabin and modern safety features.",
    price: "₹29.02 - ₹35.94 Lakh*",
    specifications: {
        Engine: "2.0L Petrol / 2.0L Diesel",
        Power: "156 - 186 PS",
        Torque: "192 - 416 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD / AWD",
        Mileage: "12 - 16.5 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Platinum AT", price: "₹29.02 Lakh" },
        { name: "Signature AT", price: "₹35.94 Lakh" }
    ],
    pros: [
        "Premium and spacious cabin",
        "Feature-rich infotainment system",
        "Powerful engine options",
        "ADAS and safety features",
        "Refined ride quality"
    ],
    cons: [
        "Expensive compared to rivals",
        "No manual transmission option",
        "AWD only in top variant",
        "Lower fuel efficiency",
        "Limited third-row seating option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "12 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "16.5 km/l" }
    ],
    colours: [
        { name: "Polar White", image: "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api" },
        { name: "Titan Grey", image: "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api" },
        { name: "Amazon Grey", image: "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api" },
        { name: "Fiery Red", image: "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.6W3zY9JOM9cP2OhFCkqPLwHaE8&pid=Api"
    ],
    topFeatures: [
        "10.25-inch touchscreen infotainment system",
        "Panoramic sunroof",
        "ADAS Level 2 features",
        "Ventilated front seats",
        "Dual-zone climate control",
        "Bose premium sound system"
    ],
    reviews: []
},
"Hyundai Elantra": {
    type: "Sedan",
    description: "A stylish sedan with cutting-edge features and a focus on comfort and technology.",
    image: "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api",
    brief: "The Hyundai Elantra is a premium sedan offering a blend of advanced technology, stylish design, and strong performance. It is designed for those who seek luxury and practicality in a single package.",
    price: "₹17.86 - ₹21.13 Lakh*",
    specifications: {
        Engine: "2.0L Petrol / 1.5L Diesel",
        Power: "152 - 192 PS",
        Torque: "192 - 250 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "14.6 - 22.7 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "S MT", price: "₹17.86 Lakh" },
        { name: "SX AT", price: "₹21.13 Lakh" }
    ],
    pros: [
        "Premium and stylish design",
        "Loaded with modern features",
        "Comfortable ride quality",
        "Powerful engine options",
        "Good fuel efficiency"
    ],
    cons: [
        "Slightly expensive for the segment",
        "Rear seat space could be better",
        "No hybrid option",
        "High maintenance cost",
        "Limited availability"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "14.6 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "22.7 km/l" }
    ],
    colours: [
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api" },
        { name: "Phantom Black", image: "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api" },
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api" },
        { name: "Typhoon Silver", image: "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.kRnbsXLWivf2-w0RkR5UqgHaE8&pid=Api"
    ],
    topFeatures: [
        "10.25-inch touchscreen infotainment",
        "Bose premium sound system",
        "Ventilated and heated seats",
        "Wireless charging",
        "Smart cruise control",
        "Sunroof"
    ],
    reviews: []
},
"Hyundai Santro": {
    type: "Hatchback",
    description: "A compact hatchback, designed for city driving with high fuel efficiency and easy maneuverability.",
    image: "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api",
    brief: "The Hyundai Santro is a budget-friendly hatchback known for its practicality, efficient performance, and comfortable interiors. It is designed to be an ideal city car with easy handling and great mileage.",
    price: "₹4.90 - ₹6.42 Lakh*",
    specifications: {
        Engine: "1.1L Petrol",
        Power: "69 bhp",
        Torque: "99 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "20.3 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "Era", price: "₹4.90 Lakh" },
        { name: "Magna", price: "₹5.46 Lakh" },
        { name: "Sportz AMT", price: "₹6.42 Lakh" }
    ],
    pros: [
        "Compact and easy to maneuver",
        "Good fuel efficiency",
        "Affordable pricing",
        "Spacious for its segment",
        "Decent features for its price"
    ],
    cons: [
        "No diesel option",
        "Basic safety features",
        "Not the most powerful engine",
        "Limited high-speed performance",
        "Outdated design compared to rivals"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "20.3 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "30.48 km/kg" }
    ],
    colours: [
        { name: "Typhoon Silver", image: "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api" },
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api" },
        { name: "Imperial Beige", image: "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api" },
        { name: "Aqua Teal", image: "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DcS6jFy9G0u9yF7Rhi5dyAHaE8&pid=Api"
    ],
    topFeatures: [
        "Touchscreen infotainment system",
        "Rear AC vents",
        "Dual airbags",
        "Reverse parking sensors",
        "Steering-mounted controls",
        "ABS with EBD"
    ],
    reviews: []
},
"Hyundai Aura": {
    type: "Sedan",
    description: "A compact sedan offering excellent value for money, packed with features and fuel efficiency.",
    image: "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api",
    brief: "The Hyundai Aura is a feature-packed compact sedan that offers excellent fuel efficiency, a modern design, and a comfortable ride. It is well-suited for both city and highway driving.",
    price: "₹6.44 - ₹9.00 Lakh*",
    specifications: {
        Engine: "1.2L Petrol / 1.2L CNG",
        Power: "82 bhp (Petrol) / 68 bhp (CNG)",
        Torque: "113 Nm (Petrol) / 95 Nm (CNG)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "20.5 km/l (Petrol) / 28 km/kg (CNG)",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "E", price: "₹6.44 Lakh" },
        { name: "S", price: "₹7.30 Lakh" },
        { name: "SX", price: "₹8.07 Lakh" },
        { name: "SX+ AMT", price: "₹9.00 Lakh" }
    ],
    pros: [
        "Fuel-efficient engine options",
        "Spacious and comfortable cabin",
        "Modern infotainment system",
        "Good safety features",
        "Value for money"
    ],
    cons: [
        "No diesel engine option",
        "Rear seat headroom could be better",
        "AMT transmission not the smoothest",
        "Basic design compared to competitors",
        "Limited boot space"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "20.5 km/l" },
        { fuelType: "Petrol", transmission: "AMT", mileage: "20.1 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "28 km/kg" }
    ],
    colours: [
        { name: "Titan Grey", image: "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api" },
        { name: "Fiery Red", image: "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api" },
        { name: "Polar White", image: "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api" },
        { name: "Aqua Teal", image: "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api" }
    ],
    exteriorImages: [
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api"
    ],
    interiorImages: [
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.rTlgFprBAhPeP1WiAE4dqAHaEK&pid=Api"
    ],
    topFeatures: [
        "8-inch touchscreen infotainment",
        "Wireless phone charging",
        "Rear AC vents",
        "Dual airbags",
        "ABS with EBD",
        "Cruise control"
    ],
    reviews: []
},
"Hyundai i10": {
    type: "Hatchback",
    description: "A compact city car known for its compact dimensions, high fuel efficiency, and easy handling.",
    image: "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api",
    brief: "The Hyundai i10 is a compact hatchback designed for urban mobility, offering a fuel-efficient engine, easy maneuverability, and a comfortable interior.",
    price: "₹4.97 - ₹6.63 Lakh*",
    specifications: {
        Engine: "1.1L Petrol / 1.2L Petrol",
        Power: "68 bhp (1.1L) / 82 bhp (1.2L)",
        Torque: "99 Nm (1.1L) / 114 Nm (1.2L)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "19.8 km/l (Petrol)",
        "Fuel Type": "Petrol",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "Era", price: "₹4.97 Lakh" },
        { name: "Magna", price: "₹5.45 Lakh" },
        { name: "Sportz", price: "₹6.02 Lakh" },
        { name: "Asta", price: "₹6.63 Lakh" }
    ],
    pros: [
        "Compact and easy to drive",
        "Good fuel efficiency",
        "Affordable pricing",
        "Low maintenance costs",
        "Comfortable interior"
    ],
    cons: [
        "Basic safety features",
        "Limited boot space",
        "No diesel option",
        "AMT gearbox could be better",
        "Lacks high-end features"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "19.8 km/l" },
        { fuelType: "Petrol", transmission: "AMT", mileage: "18.9 km/l" }
    ],
    colours: [
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api" },
        { name: "Titan Grey", image: "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api" },
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.FN23KcT5hd2y7mEmC5BR-gHaE7&pid=Api"
    ],
    topFeatures: [
        "Touchscreen infotainment system",
        "Steering-mounted controls",
        "Rear parking sensors",
        "Dual airbags",
        "ABS with EBD",
        "Smart key with push-button start"
    ],
    reviews: []
},
"Hyundai Nexo": {
    type: "SUV",
    description: "A hydrogen-powered SUV that combines eco-friendliness with the reliability of a modern Hyundai.",
    image: "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api",
    brief: "The Hyundai Nexo is a cutting-edge hydrogen fuel cell SUV offering zero emissions, advanced technology, and a futuristic design.",
    price: "₹65 - ₹70 Lakh* (Expected)",
    specifications: {
        Engine: "Hydrogen Fuel Cell",
        Power: "161 bhp",
        Torque: "395 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "666 km/tank (WLTP)",
        "Fuel Type": "Hydrogen",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Nexo Fuel Cell", price: "₹65 Lakh (Expected)" }
    ],
    pros: [
        "Zero emissions",
        "Futuristic design",
        "Long hydrogen range",
        "Advanced driver assistance",
        "Spacious and comfortable interior"
    ],
    cons: [
        "Limited hydrogen refueling infrastructure",
        "High price",
        "Limited availability",
        "Hydrogen fuel is not widely accessible",
        "Costly maintenance"
    ],
    mileage: [
        { fuelType: "Hydrogen", transmission: "Automatic", mileage: "666 km/tank (WLTP)" }
    ],
    colours: [
        { name: "Copper Metallic", image: "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api" },
        { name: "Dusk Blue", image: "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api" },
        { name: "White Pearl", image: "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.qBzp7H7eZXnvUfuVmPtqygHaE8&pid=Api"
    ],
    topFeatures: [
        "Hydrogen fuel cell technology",
        "ADAS (Advanced Driver Assistance System)",
        "Digital instrument cluster",
        "Spacious and luxurious cabin",
        "Autonomous driving features",
        "Wireless smartphone charging"
    ],
    reviews: []
},
"Hyundai Grand i10 Nios": {
    type: "Hatchback",
    description: "A premium compact hatchback with a modern design, packed with advanced features and tech.",
    image: "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api",
    brief: "The Hyundai Grand i10 Nios is a stylish and feature-rich hatchback, offering great fuel efficiency, spacious interiors, and advanced technology for a comfortable ride.",
    price: "₹5.92 - ₹8.56 Lakh*",
    specifications: {
        Engine: "1.2L Kappa Petrol / 1.2L CRDi Diesel / CNG",
        Power: "82 bhp (Petrol) / 74 bhp (Diesel) / 68 bhp (CNG)",
        Torque: "113.8 Nm (Petrol) / 190 Nm (Diesel) / 95.2 Nm (CNG)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "20-26 km/l (varies by fuel type)",
        "Fuel Type": "Petrol / Diesel / CNG",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Era", price: "₹5.92 Lakh" },
        { name: "Magna", price: "₹6.44 Lakh" },
        { name: "Sportz", price: "₹7.38 Lakh" },
        { name: "Asta", price: "₹8.56 Lakh" }
    ],
    pros: [
        "Modern and stylish design",
        "Fuel-efficient engine options",
        "Spacious and comfortable cabin",
        "Advanced infotainment system",
        "Affordable maintenance cost"
    ],
    cons: [
        "Lack of turbo petrol variant",
        "Rear seat space could be better",
        "High-speed stability could improve",
        "Basic safety features in lower variants"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "20.7 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "20.5 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "26.2 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "26.5 km/kg" }
    ],
    colours: [
        { name: "Aqua Teal", image: "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api" },
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api" },
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api" },
        { name: "Titan Grey", image: "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.DQ9q_9t5XoW8OgXaB20r7wHaE8&pid=Api"
    ],
    topFeatures: [
        "Touchscreen infotainment system",
        "Wireless charging",
        "Rear AC vents",
        "Projector headlamps",
        "Smart key with push start",
        "Steering-mounted controls"
    ],
    reviews: []
},
"Hyundai Venue": {
    type: "SUV",
    description: "A compact SUV that offers great features and technology at an affordable price.",
    image: "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api",
    brief: "The Hyundai Venue is a compact SUV designed for urban driving, offering a stylish design, modern technology, and a feature-rich cabin with great connectivity options.",
    price: "₹7.89 - ₹13.48 Lakh*",
    specifications: {
        Engine: "1.2L Kappa Petrol / 1.5L CRDi Diesel / 1.0L Turbo GDI Petrol",
        Power: "83 bhp (1.2L Petrol) / 118 bhp (1.0L Turbo Petrol) / 113 bhp (Diesel)",
        Torque: "114 Nm (1.2L Petrol) / 172 Nm (1.0L Turbo Petrol) / 250 Nm (Diesel)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "17 - 23 km/l (varies by fuel type)",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "E", price: "₹7.89 Lakh" },
        { name: "S", price: "₹8.70 Lakh" },
        { name: "SX", price: "₹10.93 Lakh" },
        { name: "SX(O)", price: "₹13.48 Lakh" }
    ],
    pros: [
        "Modern and stylish design",
        "Good fuel efficiency",
        "Feature-packed cabin",
        "Connected car technology",
        "Turbo engine option"
    ],
    cons: [
        "Limited rear-seat space",
        "No diesel automatic option",
        "Slightly firm ride quality",
        "No AWD option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "17 km/l" },
        { fuelType: "Petrol Turbo", transmission: "Automatic", mileage: "18.2 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "23.4 km/l" }
    ],
    colours: [
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api" },
        { name: "Titan Grey", image: "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api" },
        { name: "Denim Blue", image: "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api" },
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.tAM1ZyEyA64HIF1IV-1sMwHaE8&pid=Api"
    ],
    topFeatures: [
        "Bluelink connected car technology",
        "Electric sunroof",
        "Wireless phone charger",
        "Air purifier",
        "Projector LED headlamps",
        "Smart key with push-button start"
    ],
    reviews: []
},
"Hyundai Kona": {
    type: "SUV",
    description: "A modern compact SUV with a blend of comfort, technology, and fuel efficiency.",
    image: "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api",
    brief: "The Hyundai Kona is a stylish and modern compact SUV, offering a blend of advanced technology, fuel efficiency, and driving comfort, making it a great choice for city and highway driving.",
    price: "₹23.84 - ₹24.03 Lakh*",
    specifications: {
        Engine: "1.6L Turbocharged Petrol / Electric",
        Power: "121 bhp (Petrol) / 134 bhp (Electric)",
        Torque: "151 Nm (Petrol) / 395 Nm (Electric)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "17 - 452 km (varies by fuel type)",
        "Fuel Type": "Petrol / Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Kona Electric Premium", price: "₹23.84 Lakh" },
        { name: "Kona Electric Premium Dual Tone", price: "₹24.03 Lakh" }
    ],
    pros: [
        "Futuristic and sporty design",
        "Electric variant with long range",
        "Feature-packed cabin",
        "Smooth and comfortable ride",
        "Compact and easy to maneuver"
    ],
    cons: [
        "Limited rear seat space",
        "Higher price for EV variant",
        "Limited service network for EV",
        "Small boot space"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "17 km/l" },
        { fuelType: "Electric", transmission: "Automatic", mileage: "452 km/charge" }
    ],
    colours: [
        { name: "Polar White", image: "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api" },
        { name: "Phantom Black", image: "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api" },
        { name: "Fiery Red", image: "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api" },
        { name: "Typhoon Silver", image: "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api" }
    ],
    exteriorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api"
    ],
    interiorImages: [
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.oG5UtkJ5yME12Rn8jhhvJwHaEK&pid=Api"
    ],
    topFeatures: [
        "Electric powertrain option",
        "Bluelink connected car technology",
        "Wireless phone charging",
        "Heads-up display",
        "LED headlamps",
        "Smart key with push-button start"
    ],
    reviews: []
},
"Hyundai Palisade": {
    type: "SUV",
    description: "A large 7-seater SUV with a luxurious feel and premium features for both urban and off-road driving.",
    image: "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api",
    brief: "The Hyundai Palisade is a full-size SUV designed for comfort, luxury, and versatility. It offers a spacious cabin, high-end features, and strong performance, making it ideal for families and long-distance travel.",
    price: "₹40 - ₹45 Lakh* (Expected)",
    specifications: {
        Engine: "3.8L V6 Petrol",
        Power: "291 bhp",
        Torque: "355 Nm",
        "Seating Capacity": "7 - 8",
        "Drive Type": "AWD / FWD",
        Mileage: "10 - 12 km/l",
        "Fuel Type": "Petrol",
        Transmission: "8-Speed Automatic"
    },
    variants: [
        { name: "Palisade SE", price: "₹40 Lakh (Expected)" },
        { name: "Palisade SEL", price: "₹42 Lakh (Expected)" },
        { name: "Palisade Limited", price: "₹45 Lakh (Expected)" }
    ],
    pros: [
        "Spacious and luxurious cabin",
        "Powerful engine performance",
        "Advanced safety features",
        "Premium interiors and tech features",
        "Comfortable ride quality"
    ],
    cons: [
        "High price tag",
        "Limited fuel efficiency",
        "Large size makes city driving challenging",
        "No diesel variant"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "10 - 12 km/l" }
    ],
    colours: [
        { name: "Moonlight Cloud", image: "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api" },
        { name: "Hyper White", image: "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api" },
        { name: "Sierra Burgundy", image: "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api" },
        { name: "Steel Graphite", image: "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api" }
    ],
    exteriorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api"
    ],
    interiorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.4UzpLpAfhXQ8Cj85B8G3MAHaEo&pid=Api"
    ],
    topFeatures: [
        "12.3-inch digital instrument cluster",
        "Premium leather upholstery",
        "360-degree camera",
        "Blind-spot monitoring",
        "Heads-up display",
        "Panoramic sunroof"
    ],
    reviews: []
},
"Hyundai Staria": {
    type: "MPV",
    description: "A futuristic multi-purpose vehicle designed for large families or commercial use, offering maximum comfort and space.",
    image: "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api",
    brief: "The Hyundai Staria is a premium MPV that offers a futuristic design, spacious interiors, and advanced technology. It is designed for both family and commercial use, providing a luxurious and comfortable ride.",
    price: "₹25 - ₹30 Lakh* (Expected)",
    specifications: {
        Engine: "2.2L Diesel / 3.5L V6 Petrol",
        Power: "174 bhp (Diesel) / 268 bhp (Petrol)",
        Torque: "430 Nm (Diesel) / 331 Nm (Petrol)",
        "Seating Capacity": "7 - 9",
        "Drive Type": "FWD / AWD",
        Mileage: "12 - 15 km/l",
        "Fuel Type": "Diesel / Petrol",
        Transmission: "8-Speed Automatic"
    },
    variants: [
        { name: "Staria 9-Seater", price: "₹25 Lakh (Expected)" },
        { name: "Staria 7-Seater", price: "₹28 Lakh (Expected)" },
        { name: "Staria Premium", price: "₹30 Lakh (Expected)" }
    ],
    pros: [
        "Spacious and futuristic design",
        "Comfortable seating with premium features",
        "Strong engine performance",
        "Advanced safety and driver-assist features",
        "Versatile for both family and business use"
    ],
    cons: [
        "High price tag",
        "Large dimensions make it difficult to maneuver in city traffic",
        "Limited brand presence in MPV segment",
        "Fuel efficiency could be better"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Automatic", mileage: "15 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "12 km/l" }
    ],
    colours: [
        { name: "Graphite Grey", image: "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api" },
        { name: "Creamy White", image: "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api" },
        { name: "Moonlight Blue", image: "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api" },
        { name: "Abyss Black", image: "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api" }
    ],
    exteriorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api"
    ],
    interiorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.fXTY78D1zywJm_JX8c0fjgHaEK&pid=Api"
    ],
    topFeatures: [
        "12.3-inch touchscreen infotainment system",
        "Smart power sliding doors",
        "360-degree camera",
        "Blind-spot monitoring",
        "Premium leather upholstery",
        "Adaptive cruise control"
    ],
    reviews: []
},
"Kia Seltos": {
    type: "SUV",
    description: "A premium compact SUV with a bold design, advanced technology, and excellent performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.seltos-image&pid=Api",
    brief: "The Kia Seltos is a premium compact SUV that combines bold styling, advanced features, and a comfortable ride. It is packed with modern technology, making it a strong contender in the SUV segment.",
    price: "₹10.90 - ₹20.30 Lakh*",
    specifications: {
        Engine: "1.5L Petrol / 1.5L Diesel / 1.4L Turbo Petrol",
        Power: "113 - 138 bhp",
        Torque: "144 - 250 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "16-21 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "HTE", price: "Rs. 10.90 Lakh" },
        { name: "HTK+", price: "Rs. 13.49 Lakh" },
        { name: "GTX+", price: "Rs. 18.29 Lakh" },
        { name: "X-Line", price: "Rs. 20.30 Lakh" }
    ],
    pros: [
        "Stylish and premium design",
        "Feature-packed interior",
        "Multiple engine and transmission options",
        "Good fuel efficiency",
        "Spacious cabin"
    ],
    cons: [
        "Slightly firm ride quality",
        "Higher variants are expensive",
        "No AWD option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "16.8 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "18 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "20.8 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "21 km/l" }
    ],
    colours: [
        { name: "Intense Red", image: "https://tse4.mm.bing.net/th?id=OIP.red-seltos&pid=Api" },
        { name: "Glacier White Pearl", image: "https://tse3.mm.bing.net/th?id=OIP.white-seltos&pid=Api" },
        { name: "Gravity Grey", image: "https://tse1.mm.bing.net/th?id=OIP.grey-seltos&pid=Api" },
        { name: "Aurora Black Pearl", image: "https://tse2.mm.bing.net/th?id=OIP.black-seltos&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.seltos-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.seltos-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.seltos-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.seltos-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Touchscreen Infotainment System",
        "BOSE Sound System",
        "Air Purifier",
        "Ventilated Seats",
        "360-degree Camera",
        "Smart Connectivity Features"
    ],
    reviews: []
},
"Kia Sonet": {
    type: "SUV",
    description: "A subcompact SUV that offers modern features, stylish looks, and performance for urban driving.",
    image: "https://tse4.mm.bing.net/th?id=OIP.sonet-image&pid=Api",
    brief: "The Kia Sonet is a feature-packed subcompact SUV that blends style, technology, and efficiency. It's designed for city driving with a powerful engine lineup and modern conveniences.",
    price: "₹7.99 - ₹15.69 Lakh*",
    specifications: {
        Engine: "1.2L Petrol / 1.0L Turbo Petrol / 1.5L Diesel",
        Power: "81 - 118 bhp",
        Torque: "115 - 250 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18-24 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Manual / Automatic / iMT"
    },
    variants: [
        { name: "HTE", price: "Rs. 7.99 Lakh" },
        { name: "HTK+", price: "Rs. 9.99 Lakh" },
        { name: "GTX+", price: "Rs. 13.69 Lakh" },
        { name: "X-Line", price: "Rs. 15.69 Lakh" }
    ],
    pros: [
        "Stylish and sporty design",
        "Feature-rich cabin",
        "Powerful turbo petrol and diesel options",
        "Good mileage figures",
        "Compact size for city driving"
    ],
    cons: [
        "Firm ride quality",
        "Rear seat space is a bit tight",
        "Higher trims are expensive"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18.4 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "19 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "24.1 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "22 km/l" }
    ],
    colours: [
        { name: "Intense Red", image: "https://tse4.mm.bing.net/th?id=OIP.red-sonet&pid=Api" },
        { name: "Glacier White Pearl", image: "https://tse3.mm.bing.net/th?id=OIP.white-sonet&pid=Api" },
        { name: "Gravity Grey", image: "https://tse1.mm.bing.net/th?id=OIP.grey-sonet&pid=Api" },
        { name: "Aurora Black Pearl", image: "https://tse2.mm.bing.net/th?id=OIP.black-sonet&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.sonet-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.sonet-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.sonet-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.sonet-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Touchscreen Infotainment System",
        "BOSE Premium Sound System",
        "Ventilated Front Seats",
        "Air Purifier with Virus Protection",
        "Connected Car Features",
        "Sunroof"
    ],
    reviews: []
},
"Kia Carnival": {
    type: "MPV",
    description: "A premium multi-purpose vehicle offering spacious interiors, luxury features, and comfortable seating for large families.",
    image: "https://tse4.mm.bing.net/th?id=OIP.carnival-image&pid=Api",
    brief: "The Kia Carnival is a luxury MPV designed for families and long journeys. It offers a spacious cabin, premium features, and a smooth driving experience.",
    price: "₹30.99 - ₹40.00 Lakh*",
    specifications: {
        Engine: "2.2L Diesel",
        Power: "200 bhp",
        Torque: "440 Nm",
        "Seating Capacity": "7 / 8 / 9",
        "Drive Type": "FWD",
        Mileage: "14 km/l",
        "Fuel Type": "Diesel",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Prestige 7 Seater", price: "Rs. 30.99 Lakh" },
        { name: "Prestige 8 Seater", price: "Rs. 31.49 Lakh" },
        { name: "Limousine 7 Seater", price: "Rs. 35.49 Lakh" },
        { name: "Limousine Plus 7 Seater", price: "Rs. 40.00 Lakh" }
    ],
    pros: [
        "Extremely spacious and comfortable",
        "Premium and luxurious interiors",
        "Smooth and refined diesel engine",
        "Feature-packed infotainment system",
        "Multiple seating configurations"
    ],
    cons: [
        "Large size makes city driving difficult",
        "No petrol engine option",
        "High price compared to rivals"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Automatic", mileage: "14 km/l" }
    ],
    colours: [
        { name: "Aurora Black Pearl", image: "https://tse4.mm.bing.net/th?id=OIP.black-carnival&pid=Api" },
        { name: "Glacier White Pearl", image: "https://tse3.mm.bing.net/th?id=OIP.white-carnival&pid=Api" },
        { name: "Steel Silver", image: "https://tse1.mm.bing.net/th?id=OIP.silver-carnival&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.carnival-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.carnival-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.carnival-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.carnival-interior2&pid=Api"
    ],
    topFeatures: [
        "Dual Sunroof",
        "VIP Lounge Seats",
        "Rear Seat Entertainment System",
        "UVO Connected Car Features",
        "Tri-Zone Automatic Climate Control",
        "Power Sliding Doors"
    ],
    reviews: []
},
"Kia Carens": {
    type: "MPV",
    description: "A family-friendly MPV with a modern design, advanced features, and a comfortable ride.",
    image: "https://tse4.mm.bing.net/th?id=OIP.carens-image&pid=Api",
    brief: "The Kia Carens is a stylish and spacious MPV designed for families, offering a premium cabin, advanced safety features, and multiple engine options for a smooth drive.",
    price: "₹10.45 - ₹19.45 Lakh*",
    specifications: {
        Engine: "1.5L Petrol / 1.5L Diesel",
        Power: "115 - 160 bhp",
        Torque: "144 - 253 Nm",
        "Seating Capacity": "6 / 7",
        "Drive Type": "FWD",
        Mileage: "16 - 21 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Premium 1.5 Petrol", price: "Rs. 10.45 Lakh" },
        { name: "Prestige 1.5 Petrol", price: "Rs. 11.85 Lakh" },
        { name: "Luxury Plus 1.5 Diesel", price: "Rs. 19.45 Lakh" }
    ],
    pros: [
        "Spacious and comfortable cabin",
        "Feature-rich infotainment system",
        "Strong safety package",
        "Good fuel efficiency",
        "Multiple seating options"
    ],
    cons: [
        "No diesel automatic in lower variants",
        "Not as premium as some rivals",
        "Third-row space is limited"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "16 km/l" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "21 km/l" }
    ],
    colours: [
        { name: "Imperial Blue", image: "https://tse4.mm.bing.net/th?id=OIP.blue-carens&pid=Api" },
        { name: "Intense Red", image: "https://tse3.mm.bing.net/th?id=OIP.red-carens&pid=Api" },
        { name: "Sparkling Silver", image: "https://tse1.mm.bing.net/th?id=OIP.silver-carens&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.carens-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.carens-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.carens-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.carens-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Touchscreen Infotainment",
        "Ventilated Front Seats",
        "Electric Sunroof",
        "6 Airbags as Standard",
        "Bose Premium Sound System",
        "Connected Car Tech"
    ],
    reviews: []
},
"Kia Rio": {
    type: "Hatchback",
    description: "A compact hatchback offering stylish design, modern features, and a fuel-efficient performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.rio-image&pid=Api",
    brief: "The Kia Rio is a sleek and practical hatchback that offers an efficient drive, premium features, and a sporty design, making it a great option for city commuting.",
    price: "₹8.00 - ₹12.00 Lakh*",
    specifications: {
        Engine: "1.2L Petrol / 1.0L Turbo-Petrol",
        Power: "83 - 120 bhp",
        Torque: "115 - 172 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "17 - 20 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "LX 1.2 Petrol", price: "Rs. 8.00 Lakh" },
        { name: "EX 1.0 Turbo-Petrol", price: "Rs. 10.50 Lakh" },
        { name: "GT Line Turbo DCT", price: "Rs. 12.00 Lakh" }
    ],
    pros: [
        "Attractive and sporty design",
        "Feature-rich cabin",
        "Good fuel efficiency",
        "Reliable performance",
        "Easy to drive in city conditions"
    ],
    cons: [
        "Lacks diesel engine option",
        "Rear seat space is limited",
        "Performance isn't the most exciting"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "17 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "20 km/l" }
    ],
    colours: [
        { name: "Clear White", image: "https://tse4.mm.bing.net/th?id=OIP.white-rio&pid=Api" },
        { name: "Sporty Red", image: "https://tse3.mm.bing.net/th?id=OIP.red-rio&pid=Api" },
        { name: "Aurora Black", image: "https://tse1.mm.bing.net/th?id=OIP.black-rio&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.rio-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.rio-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.rio-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.rio-interior2&pid=Api"
    ],
    topFeatures: [
        "8-inch Touchscreen Infotainment",
        "Apple CarPlay & Android Auto",
        "Automatic Climate Control",
        "Advanced Safety Features",
        "Cruise Control",
        "Rearview Camera"
    ],
    reviews: []
},
"Kia Stonic": {
    type: "SUV",
    description: "A compact crossover SUV with a youthful design, efficient engine options, and a sporty performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.stonic-image&pid=Api",
    brief: "The Kia Stonic is a compact crossover that combines bold styling, agile handling, and modern features, making it a great choice for urban adventurers.",
    price: "₹9.00 - ₹13.00 Lakh*",
    specifications: {
        Engine: "1.2L Petrol / 1.0L Turbo-Petrol",
        Power: "83 - 118 bhp",
        Torque: "115 - 172 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "16 - 20 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Base 1.2 Petrol", price: "Rs. 9.00 Lakh" },
        { name: "GT Line 1.0 Turbo", price: "Rs. 11.50 Lakh" },
        { name: "GT Line DCT", price: "Rs. 13.00 Lakh" }
    ],
    pros: [
        "Sporty and modern design",
        "Good fuel efficiency",
        "Feature-packed interior",
        "Agile and easy to drive",
        "Compact yet spacious"
    ],
    cons: [
        "No AWD option",
        "Rear space could be better",
        "Ride quality slightly firm"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "16 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "20 km/l" }
    ],
    colours: [
        { name: "Clear White", image: "https://tse4.mm.bing.net/th?id=OIP.white-stonic&pid=Api" },
        { name: "Sporty Yellow", image: "https://tse3.mm.bing.net/th?id=OIP.yellow-stonic&pid=Api" },
        { name: "Midnight Black", image: "https://tse1.mm.bing.net/th?id=OIP.black-stonic&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.stonic-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.stonic-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.stonic-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.stonic-interior2&pid=Api"
    ],
    topFeatures: [
        "Floating Touchscreen Infotainment",
        "Wireless Apple CarPlay & Android Auto",
        "Advanced Safety Features",
        "LED Headlamps & DRLs",
        "Cruise Control",
        "Premium Sound System"
    ],
    reviews: []
},
"Kia EV6": {
    type: "Electric SUV",
    description: "A premium electric SUV that offers cutting-edge technology, impressive performance, and sustainable mobility.",
    image: "https://tse4.mm.bing.net/th?id=OIP.ev6-image&pid=Api",
    brief: "The Kia EV6 is a futuristic electric SUV with outstanding performance, fast charging, and advanced technology, setting new standards in the EV market.",
    price: "₹60.95 - ₹65.95 Lakh*",
    specifications: {
        Engine: "Electric",
        Power: "225 - 320 bhp",
        Torque: "350 - 605 Nm",
        "Seating Capacity": "5",
        "Drive Type": "RWD / AWD",
        Mileage: "528 km/charge",
        "Fuel Type": "Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "GT Line RWD", price: "Rs. 60.95 Lakh" },
        { name: "GT Line AWD", price: "Rs. 65.95 Lakh" }
    ],
    pros: [
        "Stunning futuristic design",
        "Long range per charge",
        "Rapid charging capability",
        "Premium interiors & features",
        "Powerful acceleration"
    ],
    cons: [
        "High price",
        "Limited charging infrastructure",
        "No sunroof in Indian variant"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "528 km/charge" }
    ],
    colours: [
        { name: "Moonscape", image: "https://tse4.mm.bing.net/th?id=OIP.moonscape-ev6&pid=Api" },
        { name: "Yacht Blue", image: "https://tse3.mm.bing.net/th?id=OIP.blue-ev6&pid=Api" },
        { name: "Aurora Black Pearl", image: "https://tse1.mm.bing.net/th?id=OIP.black-ev6&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.ev6-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.ev6-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.ev6-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.ev6-interior2&pid=Api"
    ],
    topFeatures: [
        "Ultra-fast Charging (10-80% in 18 minutes)",
        "Augmented Reality Head-Up Display",
        "Meridian Sound System",
        "AI-based Regenerative Braking",
        "360-degree Camera",
        "ADAS (Advanced Driver Assistance System)"
    ],
    reviews: []
},
"Kia Seltos X-Line": {
    type: "SUV",
    description: "A sportier version of the Seltos with bold exterior accents, enhanced features, and a stylish design.",
    image: "https://tse4.mm.bing.net/th?id=OIP.seltos-xline-image&pid=Api",
    brief: "The Kia Seltos X-Line is a top-end variant of the Seltos, offering an aggressive design, premium interiors, and powerful performance for SUV enthusiasts.",
    price: "₹19.39 - ₹20.39 Lakh*",
    specifications: {
        Engine: "1.5L Turbo Petrol / 1.5L Diesel",
        Power: "158 bhp (Petrol) / 113 bhp (Diesel)",
        Torque: "253 Nm (Petrol) / 250 Nm (Diesel)",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18 - 21 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "Automatic (DCT / AT)"
    },
    variants: [
        { name: "X-Line Petrol DCT", price: "Rs. 19.39 Lakh" },
        { name: "X-Line Diesel AT", price: "Rs. 20.39 Lakh" }
    ],
    pros: [
        "Sporty and premium design",
        "Feature-loaded cabin",
        "Powerful turbocharged engine",
        "Good ride quality",
        "Advanced safety features"
    ],
    cons: [
        "Expensive compared to regular Seltos",
        "No AWD option",
        "Slightly firm ride quality"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "DCT", mileage: "18 km/l" },
        { fuelType: "Diesel", transmission: "AT", mileage: "21 km/l" }
    ],
    colours: [
        { name: "Matte Graphite", image: "https://tse4.mm.bing.net/th?id=OIP.graphite-xline&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.xline-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.xline-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.xline-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.xline-interior2&pid=Api"
    ],
    topFeatures: [
        "Matte Graphite Exterior Finish",
        "10.25-inch Touchscreen Infotainment",
        "Bose Premium Sound System",
        "Ventilated Seats",
        "360-degree Camera",
        "ADAS (Advanced Driver Assistance System)"
    ],
    reviews: []
},
"Kia Niro EV": {
    type: "Electric SUV",
    description: "A fully electric SUV that combines efficiency, sustainability, and modern technology.",
    image: "https://tse4.mm.bing.net/th?id=OIP.niro-ev-image&pid=Api",
    brief: "The Kia Niro EV is an all-electric SUV that delivers a long driving range, modern features, and a comfortable ride, making it an excellent choice for eco-conscious drivers.",
    price: "₹24.00 - ₹28.00 Lakh*",
    specifications: {
        Engine: "Electric Motor",
        Power: "201 bhp",
        Torque: "255 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "460 km/charge",
        "Fuel Type": "Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Niro EV EX", price: "Rs. 24.00 Lakh" },
        { name: "Niro EV EX Premium", price: "Rs. 28.00 Lakh" }
    ],
    pros: [
        "Long electric range",
        "Spacious and comfortable cabin",
        "Loaded with modern tech",
        "Eco-friendly performance",
        "Good safety features"
    ],
    cons: [
        "Slightly expensive",
        "Limited charging infrastructure in some regions",
        "FWD only, no AWD option"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "460 km/charge" }
    ],
    colours: [
        { name: "Snow White Pearl", image: "https://tse4.mm.bing.net/th?id=OIP.white-niro&pid=Api" },
        { name: "Interstellar Gray", image: "https://tse3.mm.bing.net/th?id=OIP.gray-niro&pid=Api" },
        { name: "Runway Red", image: "https://tse1.mm.bing.net/th?id=OIP.red-niro&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.niro-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.niro-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.niro-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.niro-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Touchscreen Infotainment",
        "Wireless Apple CarPlay & Android Auto",
        "Heated & Ventilated Seats",
        "Smart Regenerative Braking",
        "ADAS (Advanced Driver Assistance System)",
        "Fast Charging Capability"
    ],
    reviews: []
},
"Kia Forte": {
    type: "Sedan",
    description: "A compact sedan offering a stylish design, efficient performance, and advanced safety features.",
    image: "https://tse4.mm.bing.net/th?id=OIP.forte-image&pid=Api",
    brief: "The Kia Forte is a stylish and feature-packed compact sedan, delivering impressive fuel efficiency, modern technology, and a comfortable driving experience.",
    price: "₹18.00 - ₹22.00 Lakh*",
    specifications: {
        Engine: "1.6L Turbocharged Petrol",
        Power: "201 bhp",
        Torque: "264 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "16-18 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Automatic / Manual"
    },
    variants: [
        { name: "Forte LX", price: "Rs. 18.00 Lakh" },
        { name: "Forte GT-Line", price: "Rs. 20.00 Lakh" },
        { name: "Forte GT", price: "Rs. 22.00 Lakh" }
    ],
    pros: [
        "Sporty design",
        "Feature-rich cabin",
        "Good fuel efficiency",
        "Smooth driving experience",
        "Affordable pricing"
    ],
    cons: [
        "No AWD option",
        "Not as powerful as some rivals",
        "Rear space could be better"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "16 km/l" }
    ],
    colours: [
        { name: "Snow White Pearl", image: "https://tse4.mm.bing.net/th?id=OIP.white-forte&pid=Api" },
        { name: "Gravity Gray", image: "https://tse3.mm.bing.net/th?id=OIP.gray-forte&pid=Api" },
        { name: "Deep Sea Blue", image: "https://tse1.mm.bing.net/th?id=OIP.blue-forte&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.forte-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.forte-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.forte-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.forte-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Touchscreen Display",
        "Wireless Apple CarPlay & Android Auto",
        "Lane Keep Assist & Blind Spot Monitoring",
        "Smart Cruise Control",
        "Harman Kardon Premium Sound System",
        "Sport-Tuned Suspension"
    ],
    reviews: []
},
"Volkswagen Polo": {
    type: "Hatchback",
    description: "A compact hatchback known for its German engineering and premium features.",
    image: "https://tse4.mm.bing.net/th?id=OIP.polo-image&pid=Api",
    brief: "The Volkswagen Polo is a premium hatchback that delivers a powerful performance, stylish design, and a feature-packed cabin with German precision.",
    price: "₹6.45 - ₹10.25 Lakh*",
    specifications: {
        Engine: "1.0L TSI Petrol",
        Power: "110 bhp",
        Torque: "175 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18.24 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Trendline", price: "Rs. 6.45 Lakh" },
        { name: "Comfortline", price: "Rs. 7.60 Lakh" },
        { name: "Highline Plus", price: "Rs. 8.50 Lakh" },
        { name: "GT TSI", price: "Rs. 10.25 Lakh" }
    ],
    pros: [
        "Solid build quality",
        "Fun-to-drive performance",
        "Premium interiors",
        "Good safety features",
        "Efficient turbocharged engine"
    ],
    cons: [
        "Limited rear-seat space",
        "Outdated infotainment system",
        "High service costs"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18.24 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "16.47 km/l" }
    ],
    colours: [
        { name: "Flash Red", image: "https://tse4.mm.bing.net/th?id=OIP.polo-red&pid=Api" },
        { name: "Candy White", image: "https://tse3.mm.bing.net/th?id=OIP.polo-white&pid=Api" },
        { name: "Reflex Silver", image: "https://tse1.mm.bing.net/th?id=OIP.polo-silver&pid=Api" },
        { name: "Carbon Steel", image: "https://tse2.mm.bing.net/th?id=OIP.polo-carbon&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.polo-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.polo-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.polo-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.polo-interior2&pid=Api"
    ],
    topFeatures: [
        "Touchscreen Infotainment System",
        "Cruise Control",
        "Dual Airbags",
        "ABS with EBD",
        "Rear Parking Sensors",
        "Multi-function Steering Wheel"
    ],
    reviews: []
},
"Volkswagen Virtus": {
    type: "Sedan",
    description: "A premium sedan offering a blend of performance and luxury.",
    image: "https://tse4.mm.bing.net/th?id=OIP.virtus-image&pid=Api",
    brief: "The Volkswagen Virtus is a stylish premium sedan that offers a spacious cabin, German engineering, and a fun-to-drive experience with powerful engine options.",
    price: "₹11.48 - ₹18.76 Lakh*",
    specifications: {
        Engine: "1.0L TSI Petrol / 1.5L TSI Petrol",
        Power: "113 - 148 bhp",
        Torque: "178 - 250 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18.12 - 19.40 km/l",
        "Fuel Type": "Petrol",
        Transmission: "Manual / Automatic (DSG)"
    },
    variants: [
        { name: "Comfortline", price: "Rs. 11.48 Lakh" },
        { name: "Highline", price: "Rs. 13.48 Lakh" },
        { name: "Topline", price: "Rs. 15.72 Lakh" },
        { name: "GT Plus", price: "Rs. 18.76 Lakh" }
    ],
    pros: [
        "Premium build quality",
        "Spacious and feature-rich cabin",
        "Powerful and refined engines",
        "DSG transmission for smooth performance",
        "Advanced safety features"
    ],
    cons: [
        "Higher price compared to rivals",
        "No diesel engine option",
        "Limited service network in some areas"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "19.40 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "18.12 km/l" }
    ],
    colours: [
        { name: "Carbon Steel Grey", image: "https://tse4.mm.bing.net/th?id=OIP.virtus-grey&pid=Api" },
        { name: "Candy White", image: "https://tse3.mm.bing.net/th?id=OIP.virtus-white&pid=Api" },
        { name: "Rising Blue", image: "https://tse1.mm.bing.net/th?id=OIP.virtus-blue&pid=Api" },
        { name: "Wild Cherry Red", image: "https://tse2.mm.bing.net/th?id=OIP.virtus-red&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.virtus-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.virtus-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.virtus-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.virtus-interior2&pid=Api"
    ],
    topFeatures: [
        "10-inch Digital Cockpit",
        "Touchscreen Infotainment System",
        "Wireless Charging",
        "Ventilated Front Seats",
        "Six Airbags",
        "Sunroof"
    ],
    reviews: []
},
"Volkswagen Tiguan": {
    type: "SUV",
    description: "A compact SUV with a stylish design and advanced features.",
    image: "https://tse4.mm.bing.net/th?id=OIP.tiguan-image&pid=Api",
    brief: "The Volkswagen Tiguan is a premium compact SUV that combines a bold design, advanced technology, and strong performance with German engineering.",
    price: "₹35.17 Lakh*",
    specifications: {
        Engine: "2.0L TSI Petrol",
        Power: "187 bhp",
        Torque: "320 Nm",
        "Seating Capacity": "5",
        "Drive Type": "AWD",
        Mileage: "12.65 km/l",
        "Fuel Type": "Petrol",
        Transmission: "7-speed DSG Automatic"
    },
    variants: [
        { name: "Tiguan Elegance", price: "Rs. 35.17 Lakh" }
    ],
    pros: [
        "Premium build and design",
        "Feature-loaded interior",
        "Powerful 2.0L TSI engine",
        "Smooth DSG automatic transmission",
        "Advanced safety features"
    ],
    cons: [
        "High price tag",
        "No diesel engine option",
        "Limited third-row space"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "12.65 km/l" }
    ],
    colours: [
        { name: "Oryx White", image: "https://tse4.mm.bing.net/th?id=OIP.tiguan-white&pid=Api" },
        { name: "Deep Black", image: "https://tse3.mm.bing.net/th?id=OIP.tiguan-black&pid=Api" },
        { name: "Dolphin Grey", image: "https://tse1.mm.bing.net/th?id=OIP.tiguan-grey&pid=Api" },
        { name: "Pure White", image: "https://tse2.mm.bing.net/th?id=OIP.tiguan-purewhite&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tiguan-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tiguan-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tiguan-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tiguan-interior2&pid=Api"
    ],
    topFeatures: [
        "Panoramic Sunroof",
        "Digital Cockpit",
        "Touchscreen Infotainment System",
        "4MOTION All-Wheel Drive",
        "Adaptive LED Headlights",
        "6 Airbags"
    ],
    reviews: []
},
"Volkswagen Taigun": {
    type: "SUV",
    description: "A compact SUV offering a sporty design and efficient performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.taigun-image&pid=Api",
    brief: "The Volkswagen Taigun is a stylish and feature-packed compact SUV that delivers powerful performance, German engineering, and a premium driving experience.",
    price: "₹11.70 - ₹20.00 Lakh*",
    specifications: {
        Engine: "1.0L TSI / 1.5L TSI Petrol",
        Power: "114 - 148 bhp",
        Torque: "178 - 250 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18.47 - 20.08 km/l",
        "Fuel Type": "Petrol",
        Transmission: "6-speed Manual / 6-speed Automatic / 7-speed DSG Automatic"
    },
    variants: [
        { name: "Comfortline 1.0L TSI MT", price: "Rs. 11.70 Lakh" },
        { name: "Highline 1.0L TSI AT", price: "Rs. 15.17 Lakh" },
        { name: "GT 1.5L TSI DSG", price: "Rs. 20.00 Lakh" }
    ],
    pros: [
        "Premium German design",
        "Powerful TSI engine options",
        "Feature-packed interior",
        "Good ride and handling",
        "Advanced safety features"
    ],
    cons: [
        "No diesel engine option",
        "Slightly firm ride quality",
        "Limited rear seat space"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "19.20 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "18.47 km/l" },
        { fuelType: "Petrol", transmission: "DSG", mileage: "20.08 km/l" }
    ],
    colours: [
        { name: "Curcuma Yellow", image: "https://tse4.mm.bing.net/th?id=OIP.taigun-yellow&pid=Api" },
        { name: "Reflex Silver", image: "https://tse3.mm.bing.net/th?id=OIP.taigun-silver&pid=Api" },
        { name: "Wild Cherry Red", image: "https://tse1.mm.bing.net/th?id=OIP.taigun-red&pid=Api" },
        { name: "Carbon Steel Grey", image: "https://tse2.mm.bing.net/th?id=OIP.taigun-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.taigun-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.taigun-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.taigun-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.taigun-interior2&pid=Api"
    ],
    topFeatures: [
        "10-inch Digital Cockpit",
        "Touchscreen Infotainment with Wireless Android Auto & Apple CarPlay",
        "Ventilated Front Seats",
        "Electric Sunroof",
        "6 Airbags",
        "ESC & Hill Hold Control"
    ],
    reviews: []
},
"Volkswagen ID.4": {
    type: "Electric SUV",
    description: "An upcoming electric SUV marking Volkswagen's entry into the electric vehicle segment.",
    image: "https://tse4.mm.bing.net/th?id=OIP.id4-image&pid=Api",
    brief: "The Volkswagen ID.4 is an all-electric SUV designed for efficiency, technology, and sustainability while maintaining a stylish and comfortable ride.",
    price: "Expected ₹50 - ₹60 Lakh*",
    specifications: {
        Engine: "Electric",
        Power: "201 - 295 bhp",
        Torque: "310 - 460 Nm",
        "Seating Capacity": "5",
        "Drive Type": "RWD / AWD",
        Mileage: "400 - 520 km/charge",
        "Fuel Type": "Electric",
        Transmission: "Single-speed Automatic"
    },
    variants: [
        { name: "ID.4 Pure", price: "Expected Rs. 50 Lakh" },
        { name: "ID.4 Pro", price: "Expected Rs. 55 Lakh" },
        { name: "ID.4 GTX", price: "Expected Rs. 60 Lakh" }
    ],
    pros: [
        "Zero emissions and eco-friendly",
        "Futuristic design",
        "High-tech infotainment system",
        "Long-range battery options",
        "Volkswagen's solid build quality"
    ],
    cons: [
        "Premium pricing",
        "Limited fast-charging infrastructure in India",
        "No third-row seating"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "400 km/charge" },
        { fuelType: "Electric", transmission: "Automatic AWD", mileage: "520 km/charge" }
    ],
    colours: [
        { name: "Blue Dusk", image: "https://tse4.mm.bing.net/th?id=OIP.id4-blue&pid=Api" },
        { name: "Glacier White", image: "https://tse3.mm.bing.net/th?id=OIP.id4-white&pid=Api" },
        { name: "Deep Black", image: "https://tse1.mm.bing.net/th?id=OIP.id4-black&pid=Api" },
        { name: "Moonstone Grey", image: "https://tse2.mm.bing.net/th?id=OIP.id4-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.id4-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.id4-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.id4-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.id4-interior2&pid=Api"
    ],
    topFeatures: [
        "Fully Digital Cockpit",
        "Augmented Reality Head-Up Display",
        "Wireless Charging",
        "Fast Charging Capability",
        "Over-the-Air Software Updates",
        "Advanced Driver Assistance Systems (ADAS)"
    ],
    reviews: []
},
"Volkswagen Tera SUV": {
    type: "SUV",
    description: "An upcoming SUV expected to launch in India, details to be announced.",
    image: "https://tse4.mm.bing.net/th?id=OIP.tera-image&pid=Api",
    brief: "The Volkswagen Tera SUV is a highly anticipated upcoming model that aims to deliver a blend of German engineering, robust performance, and a premium driving experience.",
    price: "Expected ₹30 - ₹40 Lakh*",
    specifications: {
        Engine: "Expected 2.0L Turbo-Petrol / Diesel",
        Power: "Expected 180 - 220 bhp",
        Torque: "Expected 320 - 400 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD / AWD",
        Mileage: "Expected 12 - 18 km/l",
        "Fuel Type": "Petrol / Diesel",
        Transmission: "6-speed Manual / 7-speed DSG Automatic"
    },
    variants: [
        { name: "Tera Base Model", price: "Expected Rs. 30 Lakh" },
        { name: "Tera Mid Variant", price: "Expected Rs. 35 Lakh" },
        { name: "Tera Top Variant AWD", price: "Expected Rs. 40 Lakh" }
    ],
    pros: [
        "Expected premium German engineering",
        "Spacious and luxurious interiors",
        "Strong performance",
        "Advanced technology and features"
    ],
    cons: [
        "Details yet to be confirmed",
        "Expected premium pricing",
        "Limited service network compared to competitors"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "Expected 15 km/l" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "Expected 18 km/l" }
    ],
    colours: [
        { name: "Deep Blue Metallic", image: "https://tse4.mm.bing.net/th?id=OIP.tera-blue&pid=Api" },
        { name: "Platinum Grey", image: "https://tse3.mm.bing.net/th?id=OIP.tera-grey&pid=Api" },
        { name: "Pure White", image: "https://tse1.mm.bing.net/th?id=OIP.tera-white&pid=Api" },
        { name: "Carbon Steel Black", image: "https://tse2.mm.bing.net/th?id=OIP.tera-black&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tera-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tera-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tera-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tera-interior2&pid=Api"
    ],
    topFeatures: [
        "Digital Cockpit with Augmented Reality",
        "ADAS (Advanced Driver Assistance Systems)",
        "Ventilated & Electrically Adjustable Seats",
        "Premium 360° Surround Sound System",
        "Panoramic Sunroof",
        "Multiple Drive Modes & Terrain Management System"
    ],
    reviews: []
},
"Volkswagen Golf GTI": {
    type: "Hatchback",
    description: "A performance-oriented hatchback with a 2.0-litre turbo-petrol engine, expected to launch in mid-2025.",
    image: "https://tse4.mm.bing.net/th?id=OIP.golf-gti-image&pid=Api",
    brief: "The Volkswagen Golf GTI is a legendary hot hatch known for its thrilling performance, sporty design, and premium interiors. It offers a perfect blend of everyday usability and exciting driving dynamics.",
    price: "Expected ₹35 - ₹40 Lakh*",
    specifications: {
        Engine: "2.0L Turbo-Petrol",
        Power: "241 bhp",
        Torque: "370 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "Expected 14 - 16 km/l",
        "Fuel Type": "Petrol",
        Transmission: "7-speed DSG Automatic"
    },
    variants: [
        { name: "GTI Standard", price: "Expected Rs. 35 Lakh" },
        { name: "GTI Performance", price: "Expected Rs. 40 Lakh" }
    ],
    pros: [
        "Iconic hot hatch with powerful performance",
        "Sharp and sporty handling",
        "Premium interior with advanced features",
        "Highly refined DSG transmission"
    ],
    cons: [
        "Expected high pricing in India",
        "Limited rear seat space",
        "Not as fuel-efficient as smaller hatchbacks"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "Expected 15 km/l" }
    ],
    colours: [
        { name: "Tornado Red", image: "https://tse4.mm.bing.net/th?id=OIP.golf-red&pid=Api" },
        { name: "Pure White", image: "https://tse3.mm.bing.net/th?id=OIP.golf-white&pid=Api" },
        { name: "Deep Black Pearl", image: "https://tse1.mm.bing.net/th?id=OIP.golf-black&pid=Api" },
        { name: "Atlantic Blue", image: "https://tse2.mm.bing.net/th?id=OIP.golf-blue&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.golf-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.golf-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.golf-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.golf-interior2&pid=Api"
    ],
    topFeatures: [
        "10.25-inch Digital Cockpit",
        "IQ.Light Matrix LED Headlights",
        "Sports-tuned Adaptive Suspension",
        "GTI-specific Honeycomb Front Grille",
        "Performance-focused Driving Modes",
        "Wireless Charging & Infotainment System"
    ],
    reviews: []
},
"Volkswagen Tayron": {
    type: "SUV",
    description: "An upcoming SUV expected to replace the Tiguan AllSpace, with a 2.0-litre petrol engine, expected to launch in Q3 2025.",
    image: "https://tse4.mm.bing.net/th?id=OIP.tayron-image&pid=Api",
    brief: "The Volkswagen Tayron is a mid-size SUV designed to offer a premium driving experience with modern features and powerful performance. Expected to replace the Tiguan AllSpace, it provides spacious interiors and cutting-edge technology.",
    price: "Expected ₹40 - ₹45 Lakh*",
    specifications: {
        Engine: "2.0L Turbo-Petrol",
        Power: "190 bhp",
        Torque: "320 Nm",
        "Seating Capacity": "5",
        "Drive Type": "AWD",
        Mileage: "Expected 12 - 14 km/l",
        "Fuel Type": "Petrol",
        Transmission: "7-speed DSG Automatic"
    },
    variants: [
        { name: "Tayron Standard", price: "Expected Rs. 40 Lakh" },
        { name: "Tayron R-Line", price: "Expected Rs. 45 Lakh" }
    ],
    pros: [
        "Modern and stylish SUV design",
        "Spacious and comfortable cabin",
        "Advanced safety and tech features",
        "Strong turbo-petrol engine"
    ],
    cons: [
        "Expected high price in India",
        "Not available in diesel option",
        "Fuel efficiency might be lower for AWD variant"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Automatic", mileage: "Expected 13 km/l" }
    ],
    colours: [
        { name: "Deep Black Pearl", image: "https://tse4.mm.bing.net/th?id=OIP.tayron-black&pid=Api" },
        { name: "Oryx White", image: "https://tse3.mm.bing.net/th?id=OIP.tayron-white&pid=Api" },
        { name: "Pure Grey", image: "https://tse1.mm.bing.net/th?id=OIP.tayron-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tayron-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tayron-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.tayron-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.tayron-interior2&pid=Api"
    ],
    topFeatures: [
        "IQ.DRIVE Safety Assist",
        "Panoramic Sunroof",
        "12-inch Digital Cockpit",
        "Premium Leather Upholstery",
        "Adaptive Cruise Control",
        "Wireless Smartphone Integration"
    ],
    reviews: []
},
"Maruti Suzuki Alto K10": {
    type: "Hatchback",
    description: "A compact hatchback known for its fuel efficiency and compact design.",
    image: "https://tse4.mm.bing.net/th?id=OIP.alto-k10-image&pid=Api",
    brief: "The Maruti Suzuki Alto K10 is a budget-friendly hatchback offering excellent fuel efficiency, easy maneuverability, and a reliable driving experience. It is an ideal choice for city commutes and first-time car buyers.",
    price: "₹3.99 - ₹5.96 Lakh*",
    specifications: {
        Engine: "1.0L K-Series Petrol",
        Power: "66 bhp",
        Torque: "89 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "24.39 - 33.85 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "STD", price: "₹3.99 Lakh" },
        { name: "LXI", price: "₹4.82 Lakh" },
        { name: "VXI", price: "₹5.06 Lakh" },
        { name: "VXI+ AMT", price: "₹5.96 Lakh" }
    ],
    pros: [
        "Excellent fuel efficiency",
        "Compact and easy to drive",
        "Affordable price",
        "Reliable Maruti Suzuki service network"
    ],
    cons: [
        "Basic safety features",
        "Limited cabin space",
        "Noisy at high speeds"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "24.39 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "33.85 km/kg" }
    ],
    colours: [
        { name: "Solid White", image: "https://tse4.mm.bing.net/th?id=OIP.alto-white&pid=Api" },
        { name: "Silky Silver", image: "https://tse3.mm.bing.net/th?id=OIP.alto-silver&pid=Api" },
        { name: "Speedy Blue", image: "https://tse1.mm.bing.net/th?id=OIP.alto-blue&pid=Api" },
        { name: "Sizzling Red", image: "https://tse2.mm.bing.net/th?id=OIP.alto-red&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.alto-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.alto-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.alto-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.alto-interior2&pid=Api"
    ],
    topFeatures: [
        "Auto Gear Shift (AGS)",
        "SmartPlay Studio Infotainment",
        "Dual Airbags",
        "ABS with EBD",
        "Reverse Parking Sensors"
    ],
    reviews: []
},
"Maruti Suzuki Swift": {
    type: "Hatchback",
    description: "A popular hatchback offering sporty design and peppy performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.swift-image&pid=Api",
    brief: "The Maruti Suzuki Swift is a stylish and sporty hatchback that offers a powerful engine, great fuel efficiency, and modern features. It's a perfect choice for urban driving with a fun-to-drive experience.",
    price: "₹5.99 - ₹9.03 Lakh*",
    specifications: {
        Engine: "1.2L DualJet Petrol",
        Power: "89 bhp",
        Torque: "113 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "22.38 - 30.90 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "LXI", price: "₹5.99 Lakh" },
        { name: "VXI", price: "₹6.90 Lakh" },
        { name: "ZXI", price: "₹7.73 Lakh" },
        { name: "ZXI+ AMT", price: "₹9.03 Lakh" }
    ],
    pros: [
        "Sporty design",
        "Great fuel efficiency",
        "Peppy performance",
        "Reliable Maruti Suzuki service network"
    ],
    cons: [
        "Limited rear-seat space",
        "No diesel option",
        "Build quality could be better"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "22.38 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "30.90 km/kg" }
    ],
    colours: [
        { name: "Solid Fire Red", image: "https://tse4.mm.bing.net/th?id=OIP.swift-red&pid=Api" },
        { name: "Pearl Arctic White", image: "https://tse3.mm.bing.net/th?id=OIP.swift-white&pid=Api" },
        { name: "Metallic Magma Grey", image: "https://tse1.mm.bing.net/th?id=OIP.swift-grey&pid=Api" },
        { name: "Midnight Blue", image: "https://tse2.mm.bing.net/th?id=OIP.swift-blue&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.swift-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.swift-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.swift-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.swift-interior2&pid=Api"
    ],
    topFeatures: [
        "SmartPlay Studio Infotainment",
        "Cruise Control",
        "Push Start/Stop Button",
        "ABS with EBD",
        "Dual Airbags"
    ],
    reviews: []
},
"Maruti Suzuki Dzire": {
    type: "Sedan",
    description: "A compact sedan combining elegance with practicality.",
    image: "https://tse4.mm.bing.net/th?id=OIP.dzire-image&pid=Api",
    brief: "The Maruti Suzuki Dzire is a stylish and practical compact sedan offering excellent fuel efficiency, a spacious cabin, and advanced features. It is a perfect choice for families and daily commuters.",
    price: "₹6.57 - ₹9.39 Lakh*",
    specifications: {
        Engine: "1.2L DualJet Petrol",
        Power: "89 bhp",
        Torque: "113 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "22.41 - 31.12 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "LXI", price: "₹6.57 Lakh" },
        { name: "VXI", price: "₹7.44 Lakh" },
        { name: "ZXI", price: "₹8.32 Lakh" },
        { name: "ZXI+ AMT", price: "₹9.39 Lakh" }
    ],
    pros: [
        "Excellent fuel efficiency",
        "Spacious and comfortable cabin",
        "Smooth automatic transmission option",
        "Reliable Maruti Suzuki service network"
    ],
    cons: [
        "No diesel engine option",
        "Soft suspension affects handling",
        "Lacks some premium features"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "22.41 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "31.12 km/kg" }
    ],
    colours: [
        { name: "Oxford Blue", image: "https://tse4.mm.bing.net/th?id=OIP.dzire-blue&pid=Api" },
        { name: "Pearl Arctic White", image: "https://tse3.mm.bing.net/th?id=OIP.dzire-white&pid=Api" },
        { name: "Sherwood Brown", image: "https://tse1.mm.bing.net/th?id=OIP.dzire-brown&pid=Api" },
        { name: "Magnum Grey", image: "https://tse2.mm.bing.net/th?id=OIP.dzire-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.dzire-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.dzire-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.dzire-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.dzire-interior2&pid=Api"
    ],
    topFeatures: [
        "SmartPlay Studio Infotainment",
        "Cruise Control",
        "Push Start/Stop Button",
        "Rear AC Vents",
        "Dual Airbags"
    ],
    reviews: []
},
"Maruti Suzuki Baleno": {
    type: "Hatchback",
    description: "A premium hatchback offering spacious interiors and advanced features.",
    image: "https://tse4.mm.bing.net/th?id=OIP.baleno-image&pid=Api",
    brief: "The Maruti Suzuki Baleno is a premium hatchback that combines stylish design, spacious interiors, and cutting-edge technology. It is one of the best-selling hatchbacks in India, offering great fuel efficiency and performance.",
    price: "₹6.66 - ₹9.83 Lakh*",
    specifications: {
        Engine: "1.2L DualJet Petrol",
        Power: "89 bhp",
        Torque: "113 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "22.35 - 30.61 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "Sigma", price: "₹6.66 Lakh" },
        { name: "Delta", price: "₹7.50 Lakh" },
        { name: "Zeta", price: "₹8.38 Lakh" },
        { name: "Alpha AMT", price: "₹9.83 Lakh" }
    ],
    pros: [
        "Spacious and premium interiors",
        "Smooth and efficient engine",
        "Loaded with features like a 9-inch touchscreen",
        "Reliable Maruti Suzuki service network"
    ],
    cons: [
        "No diesel engine option",
        "Soft suspension affects handling",
        "Lacks sunroof"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "22.35 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "30.61 km/kg" }
    ],
    colours: [
        { name: "Nexa Blue", image: "https://tse4.mm.bing.net/th?id=OIP.baleno-blue&pid=Api" },
        { name: "Luxe Beige", image: "https://tse3.mm.bing.net/th?id=OIP.baleno-beige&pid=Api" },
        { name: "Magma Grey", image: "https://tse1.mm.bing.net/th?id=OIP.baleno-grey&pid=Api" },
        { name: "Opulent Red", image: "https://tse2.mm.bing.net/th?id=OIP.baleno-red&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.baleno-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.baleno-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.baleno-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.baleno-interior2&pid=Api"
    ],
    topFeatures: [
        "9-inch SmartPlay Studio Infotainment",
        "Heads-Up Display",
        "360-degree Camera",
        "Rear AC Vents",
        "6 Airbags"
    ],
    reviews: []
},
"Maruti Suzuki Celerio": {
    type: "Hatchback",
    description: "An innovative hatchback featuring Auto Gear Shift (AGS) technology.",
    image: "https://tse4.mm.bing.net/th?id=OIP.celerio-image&pid=Api",
    brief: "The Maruti Suzuki Celerio is a compact hatchback known for its fuel efficiency, easy maneuverability, and Auto Gear Shift (AGS) technology. It is a great option for city driving with a spacious cabin and modern features.",
    price: "₹5.37 - ₹7.14 Lakh*",
    specifications: {
        Engine: "1.0L K10C Petrol",
        Power: "66 bhp",
        Torque: "89 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "24.97 - 35.60 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "LXi", price: "₹5.37 Lakh" },
        { name: "VXi AMT", price: "₹6.13 Lakh" },
        { name: "ZXi Plus", price: "₹6.72 Lakh" },
        { name: "VXi CNG", price: "₹6.74 Lakh" }
    ],
    pros: [
        "Excellent fuel efficiency",
        "Compact and easy to drive in cities",
        "Affordable pricing",
        "Spacious for a hatchback"
    ],
    cons: [
        "Basic interior design",
        "Lacks some premium features",
        "No diesel option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "24.97 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "35.60 km/kg" }
    ],
    colours: [
        { name: "Speedy Blue", image: "https://tse4.mm.bing.net/th?id=OIP.celerio-blue&pid=Api" },
        { name: "Glistening Grey", image: "https://tse3.mm.bing.net/th?id=OIP.celerio-grey&pid=Api" },
        { name: "Solid Fire Red", image: "https://tse1.mm.bing.net/th?id=OIP.celerio-red&pid=Api" },
        { name: "Pearl Arctic White", image: "https://tse2.mm.bing.net/th?id=OIP.celerio-white&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.celerio-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.celerio-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.celerio-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.celerio-interior2&pid=Api"
    ],
    topFeatures: [
        "Auto Gear Shift (AGS)",
        "SmartPlay Infotainment System",
        "Dual Airbags",
        "Hill-Hold Assist",
        "Idle Start-Stop Technology"
    ],
    reviews: []
},
"Maruti Suzuki Wagon R": {
    type: "Hatchback",
    description: "A tall-boy design hatchback offering ample space and practicality.",
    image: "https://tse4.mm.bing.net/th?id=OIP.wagonr-image&pid=Api",
    brief: "The Maruti Suzuki Wagon R is a spacious hatchback known for its tall-boy design, practicality, and fuel efficiency. It offers a comfortable ride for families and is one of the most popular city cars in India.",
    price: "₹5.54 - ₹7.42 Lakh*",
    specifications: {
        Engine: "1.0L K10C Petrol / 1.2L K12C Petrol",
        Power: "66 - 88 bhp",
        Torque: "89 - 113 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "24.35 - 34.05 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / AMT"
    },
    variants: [
        { name: "LXi 1.0", price: "₹5.54 Lakh" },
        { name: "VXi 1.0 AMT", price: "₹6.41 Lakh" },
        { name: "ZXi+ 1.2", price: "₹7.10 Lakh" },
        { name: "LXi CNG", price: "₹6.44 Lakh" }
    ],
    pros: [
        "Spacious and practical interior",
        "Tall-boy design offers great headroom",
        "Reliable and fuel-efficient engines",
        "Affordable maintenance costs"
    ],
    cons: [
        "Basic interior design",
        "Lacks high-end features",
        "Not the most exciting to drive"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "24.35 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "34.05 km/kg" }
    ],
    colours: [
        { name: "Magma Grey", image: "https://tse4.mm.bing.net/th?id=OIP.wagonr-grey&pid=Api" },
        { name: "Silky Silver", image: "https://tse3.mm.bing.net/th?id=OIP.wagonr-silver&pid=Api" },
        { name: "Nutmeg Brown", image: "https://tse1.mm.bing.net/th?id=OIP.wagonr-brown&pid=Api" },
        { name: "Poolside Blue", image: "https://tse2.mm.bing.net/th?id=OIP.wagonr-blue&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.wagonr-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.wagonr-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.wagonr-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.wagonr-interior2&pid=Api"
    ],
    topFeatures: [
        "SmartPlay Infotainment System",
        "Dual Airbags",
        "ABS with EBD",
        "Power Windows",
        "Rear Parking Sensors"
    ],
    reviews: []
},
"Maruti Suzuki Vitara Brezza": {
    type: "SUV",
    description: "A compact SUV known for its robust design and efficient performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.brezza-image&pid=Api",
    brief: "The Maruti Suzuki Vitara Brezza is a stylish and feature-packed compact SUV, offering a reliable engine, spacious cabin, and advanced safety features. It is designed for urban and highway drives with a focus on fuel efficiency.",
    price: "₹8.29 - ₹14.14 Lakh*",
    specifications: {
        Engine: "1.5L K15C Smart Hybrid Petrol",
        Power: "102 bhp",
        Torque: "137 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "17.38 - 25.51 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "LXi", price: "₹8.29 Lakh" },
        { name: "VXi", price: "₹9.64 Lakh" },
        { name: "ZXi AT", price: "₹12.04 Lakh" },
        { name: "ZXi+ AT", price: "₹14.14 Lakh" }
    ],
    pros: [
        "Bold and attractive design",
        "Spacious and practical cabin",
        "Reliable and fuel-efficient engine",
        "Advanced safety features"
    ],
    cons: [
        "No diesel engine option",
        "Slightly firm ride quality",
        "Interior quality could be better"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "17.38 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "19.80 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "25.51 km/kg" }
    ],
    colours: [
        { name: "Magma Grey", image: "https://tse4.mm.bing.net/th?id=OIP.brezza-grey&pid=Api" },
        { name: "Sizzling Red", image: "https://tse3.mm.bing.net/th?id=OIP.brezza-red&pid=Api" },
        { name: "Brave Khaki", image: "https://tse1.mm.bing.net/th?id=OIP.brezza-khaki&pid=Api" },
        { name: "Splendid Silver", image: "https://tse2.mm.bing.net/th?id=OIP.brezza-silver&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.brezza-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.brezza-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.brezza-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.brezza-interior2&pid=Api"
    ],
    topFeatures: [
        "9-inch SmartPlay Infotainment System",
        "Wireless Charging",
        "Sunroof",
        "360-degree Camera",
        "Cruise Control"
    ],
    reviews: []
},
"Maruti Suzuki S-Cross": {
    type: "SUV",
    description: "A premium crossover SUV offering a blend of style and performance.",
    image: "https://tse2.mm.bing.net/th?id=OIP.s-cross-image&pid=Api",
    brief: "The Maruti Suzuki S-Cross is a stylish crossover SUV designed for those who seek a balance between urban driving and adventure. With a powerful engine, spacious cabin, and premium features, it offers a refined driving experience.",
    price: "₹8.95 - ₹12.92 Lakh*",
    specifications: {
        Engine: "1.5L K15B Smart Hybrid Petrol",
        Power: "103 bhp",
        Torque: "138 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "18.55 - 25.1 km/l",
        "Fuel Type": "Petrol / CNG",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Sigma", price: "₹8.95 Lakh" },
        { name: "Delta", price: "₹9.95 Lakh" },
        { name: "Zeta AT", price: "₹11.72 Lakh" },
        { name: "Alpha AT", price: "₹12.92 Lakh" }
    ],
    pros: [
        "Premium and spacious cabin",
        "Fuel-efficient hybrid engine",
        "Good ride and handling",
        "SmartPlay Studio infotainment system"
    ],
    cons: [
        "No diesel engine option",
        "Lacks a sunroof",
        "Not as rugged as some competitors"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18.55 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "17.50 km/l" },
        { fuelType: "CNG", transmission: "Manual", mileage: "25.1 km/kg" }
    ],
    colours: [
        { name: "Nexa Blue", image: "https://tse4.mm.bing.net/th?id=OIP.s-cross-blue&pid=Api" },
        { name: "Granite Grey", image: "https://tse3.mm.bing.net/th?id=OIP.s-cross-grey&pid=Api" },
        { name: "Caffeine Brown", image: "https://tse1.mm.bing.net/th?id=OIP.s-cross-brown&pid=Api" },
        { name: "Pearl Arctic White", image: "https://tse2.mm.bing.net/th?id=OIP.s-cross-white&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.s-cross-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.s-cross-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.s-cross-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.s-cross-interior2&pid=Api"
    ],
    topFeatures: [
        "Smart Hybrid Technology",
        "Cruise Control",
        "7-inch SmartPlay Studio Infotainment",
        "LED Projector Headlamps",
        "Reverse Parking Camera"
    ],
    reviews: []
},
"Maruti Suzuki Grand Vitara": {
    type: "SUV",
    description: "A mid-size SUV offering advanced features and a comfortable ride.",
    image: "https://tse2.mm.bing.net/th?id=OIP.grand-vitara-image&pid=Api",
    brief: "The Maruti Suzuki Grand Vitara is a feature-packed SUV offering a strong hybrid powertrain, AWD option, and a tech-loaded cabin. It blends efficiency, comfort, and modern design, making it a strong contender in its segment.",
    price: "₹10.70 - ₹19.99 Lakh*",
    specifications: {
        Engine: "1.5L K15C Smart Hybrid Petrol / 1.5L Strong Hybrid",
        Power: "102 bhp (Smart Hybrid) / 115 bhp (Strong Hybrid)",
        Torque: "136 Nm / 122 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD / AWD",
        Mileage: "19.38 - 27.97 km/l",
        "Fuel Type": "Petrol / Hybrid",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Sigma", price: "₹10.70 Lakh" },
        { name: "Delta", price: "₹12.00 Lakh" },
        { name: "Zeta Hybrid", price: "₹17.99 Lakh" },
        { name: "Alpha AWD", price: "₹19.99 Lakh" }
    ],
    pros: [
        "Strong hybrid offers excellent fuel efficiency",
        "Premium interiors and tech features",
        "AWD option for off-road capability",
        "Spacious and comfortable ride"
    ],
    cons: [
        "Lacks a diesel engine option",
        "Hybrid variants are expensive",
        "No turbo-petrol engine choice"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "21.11 km/l" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "19.38 km/l" },
        { fuelType: "Hybrid", transmission: "Automatic", mileage: "27.97 km/l" }
    ],
    colours: [
        { name: "Celestial Blue", image: "https://tse4.mm.bing.net/th?id=OIP.grand-vitara-blue&pid=Api" },
        { name: "Arctic White", image: "https://tse3.mm.bing.net/th?id=OIP.grand-vitara-white&pid=Api" },
        { name: "Grandeur Grey", image: "https://tse1.mm.bing.net/th?id=OIP.grand-vitara-grey&pid=Api" },
        { name: "Opulent Red", image: "https://tse2.mm.bing.net/th?id=OIP.grand-vitara-red&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.grand-vitara-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.grand-vitara-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.grand-vitara-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.grand-vitara-interior2&pid=Api"
    ],
    topFeatures: [
        "Panoramic Sunroof",
        "9-inch SmartPlay Pro+ Infotainment",
        "AllGrip AWD System",
        "360-degree Camera",
        "Head-up Display"
    ],
    reviews: []
},
"Maruti Suzuki Invicto": {
    type: "MPV",
    description: "A multi-purpose vehicle designed for large families and group travel.",
    image: "https://tse2.mm.bing.net/th?id=OIP.invicto-image&pid=Api",
    brief: "The Maruti Suzuki Invicto is a premium MPV based on the Toyota Innova Hycross, offering a strong hybrid powertrain, spacious interiors, and high-end comfort. It is an ideal choice for families looking for luxury and efficiency.",
    price: "₹24.79 - ₹28.42 Lakh*",
    specifications: {
        Engine: "2.0L Petrol Hybrid",
        Power: "186 bhp",
        Torque: "206 Nm",
        "Seating Capacity": "7 / 8",
        "Drive Type": "FWD",
        Mileage: "23.24 km/l",
        "Fuel Type": "Petrol Hybrid",
        Transmission: "e-CVT Automatic"
    },
    variants: [
        { name: "Zeta+ 7-Seater", price: "₹24.79 Lakh" },
        { name: "Zeta+ 8-Seater", price: "₹24.84 Lakh" },
        { name: "Alpha+ 7-Seater", price: "₹28.42 Lakh" }
    ],
    pros: [
        "Efficient hybrid powertrain with excellent mileage",
        "Spacious and luxurious cabin",
        "Premium features like ventilated seats and ADAS",
        "Comfortable ride quality"
    ],
    cons: [
        "Expensive compared to competitors",
        "No diesel engine option",
        "Badge engineering from Toyota"
    ],
    mileage: [
        { fuelType: "Hybrid", transmission: "Automatic", mileage: "23.24 km/l" }
    ],
    colours: [
        { name: "Celestial Blue", image: "https://tse4.mm.bing.net/th?id=OIP.invicto-blue&pid=Api" },
        { name: "Majestic Silver", image: "https://tse3.mm.bing.net/th?id=OIP.invicto-silver&pid=Api" },
        { name: "Mystic White", image: "https://tse1.mm.bing.net/th?id=OIP.invicto-white&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.invicto-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.invicto-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.invicto-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.invicto-interior2&pid=Api"
    ],
    topFeatures: [
        "Panoramic Sunroof",
        "Ventilated Seats",
        "ADAS (Advanced Driver Assistance System)",
        "10.1-inch Touchscreen Infotainment",
        "Connected Car Technology"
    ],
    reviews: []
},
"Maruti Suzuki e-Vitara": {
    type: "Electric SUV",
    description: "An upcoming electric SUV marking Maruti Suzuki's entry into the electric vehicle segment.",
    image: "https://tse2.mm.bing.net/th?id=OIP.evitara-image&pid=Api",
    brief: "The Maruti Suzuki e-Vitara is expected to be the brand's first electric SUV, offering a blend of sustainability, modern features, and a practical design. It aims to provide an efficient and eco-friendly alternative in the compact SUV segment.",
    price: "Expected ₹20 - ₹25 Lakh*",
    specifications: {
        Engine: "Electric",
        Power: "170 - 200 bhp (Estimated)",
        Torque: "250 - 300 Nm (Estimated)",
        "Seating Capacity": "5",
        "Drive Type": "FWD / AWD",
        Mileage: "400 - 500 km/charge (Estimated)",
        "Fuel Type": "Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "Standard", price: "Expected ₹20 Lakh" },
        { name: "Long Range", price: "Expected ₹25 Lakh" }
    ],
    pros: [
        "Eco-friendly and zero emissions",
        "Expected long driving range",
        "Modern and futuristic design",
        "Maruti Suzuki’s reliability"
    ],
    cons: [
        "Yet to be launched",
        "Limited charging infrastructure in some areas",
        "Pricing might be on the higher side"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "400 - 500 km/charge (Estimated)" }
    ],
    colours: [
        { name: "Electric Blue", image: "https://tse4.mm.bing.net/th?id=OIP.evitara-blue&pid=Api" },
        { name: "Pearl White", image: "https://tse3.mm.bing.net/th?id=OIP.evitara-white&pid=Api" },
        { name: "Graphite Grey", image: "https://tse1.mm.bing.net/th?id=OIP.evitara-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.evitara-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.evitara-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.evitara-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.evitara-interior2&pid=Api"
    ],
    topFeatures: [
        "Advanced Battery Technology",
        "Fast Charging Support",
        "ADAS (Advanced Driver Assistance System)",
        "Large Infotainment Touchscreen",
        "Digital Instrument Cluster"
    ],
    reviews: []
},
"Maruti Suzuki Grand Vitara 7-Seater": {
    type: "SUV",
    description: "An upcoming 7-seater variant of the Grand Vitara, offering more space and versatility.",
    image: "https://tse2.mm.bing.net/th?id=OIP.grandvitara7-image&pid=Api",
    brief: "The Maruti Suzuki Grand Vitara 7-Seater is expected to be a spacious and premium SUV, providing extra seating capacity while maintaining the stylish and efficient characteristics of the Grand Vitara. Perfect for families who need a practical and comfortable SUV.",
    price: "Expected ₹18 - ₹22 Lakh*",
    specifications: {
        Engine: "1.5L Petrol / Hybrid",
        Power: "103 - 115 bhp (Estimated)",
        Torque: "135 - 145 Nm (Estimated)",
        "Seating Capacity": "7",
        "Drive Type": "FWD / AWD",
        Mileage: "18 - 22 km/l (Estimated)",
        "Fuel Type": "Petrol / Hybrid",
        Transmission: "Manual / Automatic"
    },
    variants: [
        { name: "Smart Hybrid", price: "Expected ₹18 Lakh" },
        { name: "Strong Hybrid", price: "Expected ₹22 Lakh" }
    ],
    pros: [
        "Spacious and comfortable",
        "Premium features",
        "Efficient powertrain options",
        "Expected AWD capability"
    ],
    cons: [
        "Expected higher price",
        "Slightly larger footprint for city driving",
        "Launch date yet to be confirmed"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18 km/l (Estimated)" },
        { fuelType: "Hybrid", transmission: "Automatic", mileage: "22 km/l (Estimated)" }
    ],
    colours: [
        { name: "Nexa Blue", image: "https://tse4.mm.bing.net/th?id=OIP.grandvitara7-blue&pid=Api" },
        { name: "Pearl Arctic White", image: "https://tse3.mm.bing.net/th?id=OIP.grandvitara7-white&pid=Api" },
        { name: "Grandeur Grey", image: "https://tse1.mm.bing.net/th?id=OIP.grandvitara7-grey&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.grandvitara7-exterior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.grandvitara7-exterior2&pid=Api"
    ],
    interiorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.grandvitara7-interior1&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.grandvitara7-interior2&pid=Api"
    ],
    topFeatures: [
        "Panoramic Sunroof",
        "Ventilated Front Seats",
        "Large Infotainment System",
        "360-degree Camera",
        "Wireless Charging"
    ],
    reviews: []
},
"Mahindra XUV700": {
    type: "SUV",
    description: "A premium SUV offering advanced technology, luxury features, and powerful engine options.",
    image: "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    brief: "The Mahindra XUV700 is a premium SUV that combines cutting-edge technology, powerful engine options, and a feature-rich cabin. It is available in multiple variants, including petrol and diesel options, offering both manual and automatic transmissions.",
    price: "₹13.99 - ₹26.99 Lakh*",
    specifications: {
        Engine: "2.0L Turbo Petrol / 2.2L Turbo Diesel",
        Power: "200 hp (Petrol) / 155-185 hp (Diesel)",
        Torque: "360 Nm - 420 Nm",
        "Seating Capacity": "5, 6, and 7",
        "Drive Type": "FWD / AWD",
        Mileage: "13 - 16 kmpl",
        "Fuel Type": "Petrol/Diesel",
        Transmission: "Manual/Automatic"
    },
    variants: [
        { name: "MX", price: "₹13.99 Lakh" },
        { name: "AX3", price: "₹16.49 Lakh" },
        { name: "AX5", price: "₹17.69 Lakh" },
        { name: "AX7", price: "₹20.99 Lakh" },
        { name: "AX7 Luxury Pack", price: "₹23.99 Lakh" }
    ],
    pros: [
        "Premium and rugged exterior design",
        "Multiple engine and variant options",
        "Advanced safety features and modern technology",
        "Spacious and feature-rich cabin",
        "Good ride quality"
    ],
    cons: [
        "Top variants are expensive",
        "Third-row seating is a bit cramped",
        "Initial waiting periods were high",
        "Some plastic materials in the cabin could be better",
        "No diesel automatic AWD option"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "13 kmpl" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "16 kmpl" }
    ],
    colours: [
        { name: "Everest White", image: "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" },
        { name: "Dazzling Silver", image: "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { name: "Red Rage", image: "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { name: "Midnight Black", image: "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api" },
        { name: "Electric Blue", image: "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    interiorImages: [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    topFeatures: [
        "Panoramic Sunroof",
        "Dual 10.25-inch Touchscreen Displays",
        "Advanced Driver Assistance Systems (ADAS)",
        "Dual-zone Climate Control",
        "Wireless Android Auto & Apple CarPlay",
        "Premium Sound System"
    ],
    reviews: []
},
"Mahindra XUV300": {
    "type": "Compact SUV",
    "description": "A compact SUV with modern design, advanced safety features, and efficient performance.",
    "image": "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    "brief": "The Mahindra XUV300 is a compact SUV that combines a modern design with advanced safety features and efficient performance. It offers both petrol and diesel engine options, catering to a wide range of driving preferences.",
    "price": "₹7.99 - ₹14.76 Lakh*",
    "specifications": {
        "Engine": "1197 cc - 2184 cc",
        "Power": "108.6 - 130 bhp",
        "Torque": "200 Nm - 300 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        "Mileage": "16.5 - 20.1 kmpl",
        "Fuel Type": "Petrol/Diesel",
        "Transmission": "Manual/Automatic"
    },
    "variants": [
        { "name": "W4", "price": "₹7.99 Lakh" },
        { "name": "W6", "price": "₹8.98 Lakh" },
        { "name": "W8", "price": "₹10.95 Lakh" },
        { "name": "W8 (O)", "price": "₹12.69 Lakh" }
    ],
    "pros": [
        "5-star Global NCAP safety rating",
        "Feature-rich interior",
        "Multiple engine options",
        "Comfortable ride quality",
        "Compact dimensions suitable for city driving"
    ],
    "cons": [
        "Limited boot space",
        "Rear seat space could be better",
        "No diesel automatic option",
        "Some rivals offer more powerful engines",
        "Design may not appeal to everyone"
    ],
    "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "17.0 kmpl" },
        { "fuelType": "Diesel", "transmission": "Manual", "mileage": "20.1 kmpl" }
    ],
    "colours": [
        { "name": "Pearl White", "image": "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" },
        { "name": "Dazzling Silver", "image": "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Red Rage", "image": "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { "name": "Aquamarine", "image": "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api" },
        { "name": "Napoli Black", "image": "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" }
    ],
    "exteriorImages": [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "interiorImages": [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "topFeatures": [
        "Dual-zone automatic climate control",
        "7-inch touchscreen infotainment system",
        "Front parking sensors",
        "Sunroof",
        "Steering modes",
        "Heated ORVMs"
    ],
    "reviews": []
},
"Mahindra Scorpio N": {
    "type": "SUV",
    "description": "A rugged SUV known for its off-road capabilities and robust performance.",
    "image": "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    "brief": "The Mahindra Scorpio N is a robust SUV designed for both urban and off-road adventures. It offers powerful engine options, a spacious interior, and advanced safety features, making it a versatile choice for various terrains.",
    "price": "₹13.99 - ₹24.69 Lakh*",
    "specifications": {
        "Engine": "1997 cc - 2198 cc",
        "Power": "200 bhp (Petrol) / 175 bhp (Diesel)",
        "Torque": "370 Nm - 400 Nm",
        "Seating Capacity": "7",
        "Drive Type": "RWD / 4WD",
        "Mileage": "12.12 kmpl",
        "Fuel Type": "Petrol/Diesel",
        "Transmission": "Manual/Automatic"
    },
    "variants": [
        { "name": "Z2 Petrol MT 7 STR", "price": "₹13.99 Lakh" },
        { "name": "Z4 Diesel MT 7 STR", "price": "₹15.49 Lakh" },
        { "name": "Z8 Diesel AT 4WD 7 STR", "price": "₹21.94 Lakh" },
        { "name": "Z8L Diesel 4x4 AT", "price": "₹24.69 Lakh" }
    ],
    "pros": [
        "Strong off-road capabilities",
        "Powerful engine options",
        "Spacious and comfortable interior",
        "Advanced safety features",
        "Modern infotainment system"
    ],
    "cons": [
        "Third-row seating best suited for children",
        "Fuel efficiency could be better",
        "Limited boot space with all seats up",
        "High price for top variants",
        "Some competitors offer more refined ride quality"
    ],
    "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "12.12 kmpl" },
        { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "12.12 kmpl" }
    ],
    "colours": [
        { "name": "Napoli Black", "image": "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Dazzling Silver", "image": "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Everest White", "image": "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" },
        { "name": "Red Rage", "image": "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { "name": "Deep Forest", "image": "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api" }
    ],
    "exteriorImages": [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "interiorImages": [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "topFeatures": [
        "LED Projector Headlamps with LED DRLs",
        "8-inch touchscreen infotainment system",
        "Dual-zone automatic climate control",
        "Wireless charging pad",
        "Sunroof",
        "Advanced Driver Assistance Systems (ADAS)"
    ],
    "reviews": []
},
"Mahindra Thar": {
    "type": "SUV",
    "description": "An iconic off-road SUV with a blend of classic design and modern features.",
    "image": "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    "brief": "The Mahindra Thar is a legendary off-road SUV that combines its classic rugged design with contemporary features. It's engineered for adventure enthusiasts, offering robust performance both on and off the road.",
    "price": "₹11.50 - ₹17.60 Lakh*",
    "specifications": {
        "Engine": "1997 cc (Petrol) / 2184 cc (Diesel)",
        "Power": "150.19 bhp @ 5000 rpm (Petrol) / 130.07 bhp @ 3750 rpm (Diesel)",
        "Torque": "300 Nm @ 1250-3000 rpm (Petrol) / 300 Nm @ 1600-2800 rpm (Diesel)",
        "Seating Capacity": "4",
        "Drive Type": "4WD / RWD",
        "Mileage": "11 kmpl",
        "Fuel Type": "Petrol/Diesel",
        "Transmission": "Manual/Automatic"
    },
    "variants": [
        { "name": "AX Opt Hard Top Diesel RWD", "price": "₹11.50 Lakh" },
        { "name": "LX 4-Str Hard Top Diesel MT", "price": "₹13.85 Lakh" },
        { "name": "LX 4-Str Hard Top Petrol AT", "price": "₹15.08 Lakh" },
        { "name": "LX 4-Str Convertible Top Diesel AT", "price": "₹16.02 Lakh" }
    ],
    "pros": [
        "Exceptional off-road capabilities",
        "Iconic and robust design",
        "Modern infotainment system",
        "Removable roof options",
        "Improved on-road comfort"
    ],
    "cons": [
        "Limited boot space",
        "Rear seating access can be challenging",
        "Fuel efficiency could be better",
        "High step-in height",
        "Limited rear visibility"
    ],
    "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "11 kmpl" },
        { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "11 kmpl" }
    ],
    "colours": [
        { "name": "Napoli Black", "image": "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Aquamarine", "image": "https://tse4.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Red Rage", "image": "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { "name": "Galaxy Grey", "image": "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" },
        { "name": "Rocky Beige", "image": "https://tse2.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api" }
    ],
    "exteriorImages": [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "interiorImages": [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "topFeatures": [
        "Convertible and hard top options",
        "Touchscreen infotainment system with navigation",
        "Weather-resistant removable roof panels",
        "Cruise control",
        "Tyre pressure monitoring system",
        "Dual airbags and ABS with EBD"
    ],
    "reviews": []
},
"Mahindra Bolero": {
    "type": "SUV",
    "description": "A durable SUV designed for both urban and rural terrains, offering reliability and comfort.",
    "image": "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    "brief": "The Mahindra Bolero is a robust SUV known for its rugged design and dependable performance. It's engineered to handle diverse terrains, making it a popular choice in both urban and rural settings.",
    "price": "₹9.79 - ₹10.80 Lakh*",
    "specifications": {
        "Engine": "1493 cc mHawk75 Diesel",
        "Power": "75 hp @ 3600 rpm",
        "Torque": "210 Nm @ 1600-2200 rpm",
        "Seating Capacity": "7",
        "Drive Type": "RWD",
        "Mileage": "16.7 kmpl",
        "Fuel Type": "Diesel",
        "Transmission": "5-speed Manual"
    },
    "variants": [
        { "name": "B4", "price": "₹9.79 Lakh" },
        { "name": "B6", "price": "₹10.33 Lakh" },
        { "name": "B6 (O)", "price": "₹10.80 Lakh" }
    ],
    "pros": [
        "Rugged and durable build",
        "High ground clearance",
        "Spacious interior",
        "Reliable performance",
        "Low maintenance cost"
    ],
    "cons": [
        "Basic interior features",
        "Lacks modern infotainment system",
        "No automatic transmission option",
        "Average ride comfort",
        "Limited safety features"
    ],
    "mileage": [
        { "fuelType": "Diesel", "transmission": "Manual", "mileage": "16.7 kmpl" }
    ],
    "colours": [
        { "name": "Diamond White", "image": "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Lakeside Brown", "image": "https://tse4.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { "name": "Mist Silver", "image": "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" }
    ],
    "exteriorImages": [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "interiorImages": [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "topFeatures": [
        "Digital instrument cluster",
        "Micro Hybrid Technology",
        "Engine Immobilizer",
        "High ground clearance",
        "Spacious cabin"
    ],
    "reviews": []
},
"Mahindra Bolero Neo": {
    "type": "SUV",
    "description": "A compact SUV with a modern design, combining style and functionality.",
    "image": "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
    "brief": "The Mahindra Bolero Neo is a versatile compact SUV that blends the ruggedness of the classic Bolero with contemporary styling and features, making it suitable for both urban and rural adventures.",
    "price": "₹9.95 - ₹12.16 Lakh*",
    "specifications": {
        "Engine": "1493 cc mHawk100 Diesel",
        "Power": "100 hp @ 3750 rpm",
        "Torque": "260 Nm @ 1750-2250 rpm",
        "Seating Capacity": "7",
        "Drive Type": "RWD",
        "Mileage": "17.29 kmpl",
        "Fuel Type": "Diesel",
        "Transmission": "5-speed Manual"
    },
    "variants": [
        { "name": "N4", "price": "₹9.95 Lakh" },
        { "name": "N8", "price": "₹11.47 Lakh" },
        { "name": "N10", "price": "₹12.16 Lakh" }
    ],
    "pros": [
        "Robust build quality",
        "Modern design elements",
        "Spacious cabin",
        "High ground clearance",
        "Affordable maintenance"
    ],
    "cons": [
        "Limited engine options",
        "No automatic transmission",
        "Basic interior features",
        "Average fuel efficiency",
        "Limited availability of service centers in some regions"
    ],
    "mileage": [
        { "fuelType": "Diesel", "transmission": "Manual", "mileage": "17.29 kmpl" }
    ],
    "colours": [
        { "name": "Rocky Beige", "image": "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api" },
        { "name": "Highway Red", "image": "https://tse4.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api" },
        { "name": "Pearl White", "image": "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api" }
    ],
    "exteriorImages": [
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "interiorImages": [
        "https://tse2.mm.bing.net/th?id=OIP.LBN9ft_xx2mDpzheABo2QgHaEK&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.y1Md2FpPHjqjLfszk4uejgHaE8&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.3Zw4wF3bQ5su_YB8iO9joQHaE6&pid=Api",
        "https://tse2.mm.bing.net/th?id=OIP.aWYeyFsR4YWN5tJ8WtN5PAHaFj&pid=Api"
    ],
    "topFeatures": [
        "7-inch touchscreen infotainment system",
        "Dual front airbags",
        "ABS with EBD",
        "Cornering Brake Control",
        "Eco mode for fuel efficiency"
    ],
    "reviews": []
},
"Mahindra XUV400": {
    type: "Electric SUV",
    description: "An electric SUV offering zero-emission driving with modern features and performance.",
    image: "https://tse4.mm.bing.net/th?id=OIP.SS9d2mg2_aidN6L-GB3nVgHaFJ&pid=Api",
    brief: "The Mahindra XUV400 is an electric SUV that combines zero-emission driving with advanced features and impressive performance. It offers a spacious interior, modern technology, and a range suitable for daily commutes and long drives.",
    price: "₹15.49 - ₹17.69 Lakh*",
    specifications: {
        "Battery Capacity": "34.5 kWh - 39.4 kWh",
        "Power": "147.51 bhp",
        "Torque": "310 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        "Range": "375 km - 456 km",
        "Charging Time": "6.5 hours (AC 7.2 kW)",
        "Transmission": "Automatic"
    },
    variants: [
        { name: "EC 34.5 kWh", price: "₹15.49 Lakh" },
        { name: "EC 39.4 kWh", price: "₹16.49 Lakh" },
        { name: "EL 39.4 kWh", price: "₹17.69 Lakh" }
    ],
    pros: [
        "Zero-emission electric driving",
        "Advanced safety features",
        "Spacious and comfortable interior",
        "Competitive pricing",
        "Fast acceleration"
    ],
    cons: [
        "Limited charging infrastructure",
        "Higher initial cost compared to ICE vehicles",
        "Longer charging time with standard chargers",
        "Limited availability in certain regions",
        "No all-wheel-drive option"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", range: "375 km - 456 km" }
    ],
    colours: [
        { name: "Arctic Blue", image: "https://tse1.mm.bing.net/th?id=OIP.Nd0JXuzjX_fjyzHT_RtXJgHaEG&pid=Api" },
        { name: "Everest White", image: "https://tse3.mm.bing.net/th?id=OIP.mSoz1_jFJnx1qJkg608p4gHaE8&pid=Api" },
        { name: "Galaxy Grey", image: "https://tse4.mm.bing.net/th?id=OIP.GQrz7x07Lhgtj-J-89lvCwHaEK&pid=Api" },
        { name: "Napoli Black", image: "https://tse3.mm.bing.net/th?id=OIP.RufsvLAtHsP17epAzCUvAwHaDo&pid=Api" },
        { name: "Infinity Blue", image: "https://tse4.mm.bing.net/th?id=OIP.spHbdZcgLPw-xoCmEgrfKgHaEK&pid=Api" }
    ],
    exteriorImages: [
        "https://tse4.mm.bing.net/th?id=OIP.SS9d2mg2_aidN6L-GB3nVgHaFJ&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.Nd0JXuzjX_fjyzHT_RtXJgHaEG&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.mSoz1_jFJnx1qJkg608p4gHaE8&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.GQrz7x07Lhgtj-J-89lvCwHaEK&pid=Api"
    ],
    interiorImages: [
        "https://tse3.mm.bing.net/th?id=OIP.RufsvLAtHsP17epAzCUvAwHaDo&pid=Api",
        "https://tse4.mm.bing.net/th?id=OIP.spHbdZcgLPw-xoCmEgrfKgHaEK&pid=Api",
        "https://tse1.mm.bing.net/th?id=OIP.twJKcQGnJ5dECTpuclBkxQHaE8&pid=Api",
        "https://tse3.mm.bing.net/th?id=OIP.z1KcQ8rSNvadELQN53hx-AHaE8&pid=Api"
    ],
    topFeatures: [
        "Zero-emission electric powertrain",
        "Advanced safety features",
        "Spacious and comfortable interior",
        "Fast acceleration",
        "Modern infotainment system",
        "Multiple driving modes"
    ],
    reviews: []
},
"Mahindra Marazzo": {
    type: "MPV",
    description: "A spacious MPV designed for family comfort and long-distance travel.",
    image: "", // Add image URL here
    brief: "The Mahindra Marazzo is a versatile MPV offering ample space, comfort, and a smooth ride, making it ideal for families and long journeys.",
    price: "₹14.59 - ₹17.00 Lakh*",
    specifications: {
        Engine: "1497 cc",
        Power: "121 bhp",
        Torque: "300 Nm",
        "Seating Capacity": "7/8",
        "Drive Type": "FWD",
        Mileage: "17.3 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "Manual"
    },
    variants: [
        { name: "M2 7-Seater", price: "₹14.59 Lakh" },
        { name: "M2 8-Seater", price: "₹14.69 Lakh" },
        { name: "M4 Plus 7-Seater", price: "₹15.80 Lakh" },
        { name: "M4 Plus 8-Seater", price: "₹15.90 Lakh" },
        { name: "M6 Plus 7-Seater", price: "₹16.90 Lakh" },
        { name: "M6 Plus 8-Seater", price: "₹17.00 Lakh" }
    ],
    pros: [
        "Spacious and comfortable interior",
        "Smooth ride quality",
        "Robust build quality",
        "Efficient cooling with rear AC vents",
        "Good fuel efficiency"
    ],
    cons: [
        "Limited engine options",
        "No automatic transmission available",
        "Third-row space could be better",
        "Limited high-end features",
        "Diesel-only variant"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "17.3 kmpl" }
    ],
    colours: [
        { name: "Iceberg White", image: "" }, // Add image URL here
        { name: "Aqua Marine", image: "" }, // Add image URL here
        { name: "Shimmering Silver", image: "" }, // Add image URL here
        { name: "Oceanic Black", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Dual Front Airbags",
        "ABS with EBD",
        "Rear AC Vents",
        "Touchscreen Infotainment System",
        "Steering Mounted Controls",
        "Reverse Parking Sensors"
    ],
    reviews: []
},
"Mahindra Alturas G4": {
    type: "SUV",
    description: "A luxury SUV offering premium features and powerful performance.",
    image: "", // Add image URL here
    brief: "The Mahindra Alturas G4 is a premium SUV that delivers a high-end driving experience with its luxurious interiors, advanced features, and strong road presence.",
    price: "₹28.88 - ₹31.88 Lakh*",
    specifications: {
        Engine: "2157 cc",
        Power: "178 bhp",
        Torque: "420 Nm",
        "Seating Capacity": "7",
        "Drive Type": "2WD/4WD",
        Mileage: "12.05 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "Automatic"
    },
    variants: [
        { name: "2WD AT", price: "₹28.88 Lakh" },
        { name: "4WD AT", price: "₹31.88 Lakh" }
    ],
    pros: [
        "Premium and spacious cabin",
        "Powerful diesel engine",
        "Feature-loaded interior",
        "Good road presence",
        "Smooth automatic transmission"
    ],
    cons: [
        "Limited dealership and service network",
        "Fuel efficiency could be better",
        "High maintenance cost",
        "No petrol engine option",
        "Brand value lower than some rivals"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Automatic", mileage: "12.05 kmpl" }
    ],
    colours: [
        { name: "Regal Blue", image: "" }, // Add image URL here
        { name: "Dsat Silver", image: "" }, // Add image URL here
        { name: "Lakeside Brown", image: "" }, // Add image URL here
        { name: "Napoli Black", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "9-Airbag Safety",
        "Premium Leather Upholstery",
        "4WD Capability",
        "8-inch Touchscreen Infotainment",
        "Ventilated Seats",
        "360-degree Camera"
    ],
    reviews: []
},
"Mahindra KUV100 NXT": {
    type: "Compact SUV",
    description: "A compact SUV with a youthful design, offering urban mobility and efficiency.",
    image: "", // Add image URL here
    brief: "The Mahindra KUV100 NXT is a compact SUV designed for urban commuters, featuring a modern design, efficient performance, and practical features suitable for city driving.",
    price: "₹4.96 - ₹8.02 Lakh*",
    specifications: {
        Engine: "1198 cc",
        Power: "82 bhp",
        Torque: "115 Nm",
        "Seating Capacity": "5/6",
        "Drive Type": "FWD",
        Mileage: "18.15 - 25.32 kmpl",
        "Fuel Type": "Petrol/CNG/Diesel",
        Transmission: "Manual"
    },
    variants: [
        { name: "K2 6 STR", price: "₹4.96 Lakh" },
        { name: "Trip 6S CNG", price: "₹5.16 Lakh" },
        { name: "K2 Plus 6 STR", price: "₹5.37 Lakh" },
        { name: "K4 Plus 5 STR", price: "₹5.77 Lakh" },
        { name: "K4 Plus 6 STR", price: "₹5.83 Lakh" },
        { name: "K2 D 6 STR", price: "₹6.00 Lakh" },
        { name: "K2 Plus 6 STR", price: "₹6.21 Lakh" },
        { name: "K2 Plus D 6 STR", price: "₹6.25 Lakh" },
        { name: "K6 Plus 5 STR", price: "₹6.55 Lakh" },
        { name: "K6 Plus 6 STR", price: "₹6.61 Lakh" },
        { name: "K4 Plus D 5 STR", price: "₹6.68 Lakh" },
        { name: "K4 Plus 6 STR", price: "₹6.69 Lakh" },
        { name: "K4 Plus D 6 STR", price: "₹6.74 Lakh" },
        { name: "K8 5 STR", price: "₹6.92 Lakh" },
        { name: "K8 6 STR", price: "₹6.98 Lakh" },
        { name: "K8 6 STR Dual Tone", price: "₹7.06 Lakh" },
        { name: "K6 Plus 6 STR", price: "₹7.39 Lakh" },
        { name: "K6 Plus D 5 STR", price: "₹7.54 Lakh" },
        { name: "K6 Plus D 6 STR", price: "₹7.60 Lakh" },
        { name: "K8 6 STR", price: "₹7.88 Lakh" },
        { name: "K8 D 5 STR", price: "₹7.88 Lakh" },
        { name: "K8 6 STR Dual Tone", price: "₹7.93 Lakh" },
        { name: "K8 D 6 STR", price: "₹7.94 Lakh" },
        { name: "K8 D 6 STR Dual Tone", price: "₹8.02 Lakh" }
    ],
    pros: [
        "Compact size suitable for city driving",
        "Multiple seating configurations",
        "Fuel-efficient engine options",
        "Affordable pricing",
        "Modern and youthful design"
    ],
    cons: [
        "Limited boot space",
        "Interior quality could be improved",
        "No automatic transmission option",
        "Engine performance may feel underpowered on highways",
        "Limited service network in some areas"
    ],
    mileage: [
        { fuelType: "Petrol", transmission: "Manual", mileage: "18.15 kmpl" },
        { fuelType: "Diesel", transmission: "Manual", mileage: "25.32 kmpl" },
        { fuelType: "CNG", transmission: "Manual", mileage: "NA" }
    ],
    colours: [
        { name: "Fiery Orange", image: "" }, // Add image URL here
        { name: "Dazzling Silver", image: "" }, // Add image URL here
        { name: "Flamboyant Red", image: "" }, // Add image URL here
        { name: "Pearl White", image: "" }, // Add image URL here
        { name: "Midnight Black", image: "" }, // Add image URL here
        { name: "Designer Grey", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "7.0-inch Touchscreen Infotainment System",
        "Auto Start-Stop (Micro-Hybrid)",
        "Dual Front Airbags",
        "ABS with EBD",
        "Steering Mounted Controls",
        "LED Daytime Running Lights"
    ],
    reviews: []
},
"Mahindra e2o Plus": {
    type: "Electric Hatchback",
    description: "An electric hatchback offering eco-friendly driving with compact dimensions.",
    image: "", // Add image URL here
    brief: "The Mahindra e2o Plus is a compact electric hatchback designed for urban mobility, offering an eco-friendly alternative with its electric powertrain and compact size.",
    price: "₹7.48 - ₹11.49 Lakh*",
    specifications: {
        "Battery Capacity": "10.1 - 15.1 kWh",
        Power: "25.4 - 40 bhp",
        Torque: "70 - 91 Nm",
        "Seating Capacity": "4",
        "Drive Type": "FWD",
        Mileage: "110 - 140 km per charge",
        "Fuel Type": "Electric",
        Transmission: "Automatic"
    },
    variants: [
        { name: "P2", price: "₹6.50 Lakh" },
        { name: "P4", price: "₹6.07 Lakh" },
        { name: "P6", price: "₹6.83 Lakh" },
        { name: "P8", price: "₹8.46 Lakh" }
    ],
    pros: [
        "Zero tailpipe emissions",
        "Compact size ideal for city driving",
        "Low running costs",
        "Easy to maneuver",
        "Automatic transmission for convenience"
    ],
    cons: [
        "Limited driving range compared to conventional vehicles",
        "Charging infrastructure may be inadequate in some areas",
        "Relatively high initial purchase price",
        "Limited seating capacity",
        "Performance may not match traditional fuel vehicles"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "110 - 140 km per charge" }
    ],
    colours: [
        { name: "Coral Blue", image: "" }, // Add image URL here
        { name: "Wine Red", image: "" }, // Add image URL here
        { name: "Arctic Silver", image: "" }, // Add image URL here
        { name: "Solid White", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Regenerative Braking",
        "Remote Diagnostics",
        "Touchscreen Infotainment System",
        "Reverse Parking Camera",
        "Keyless Entry",
        "GPS Navigation"
    ],
    reviews: []
},
"Mahindra eVerito": {
    type: "Electric Sedan",
    description: "An electric sedan offering spacious interiors and zero-emission driving.",
    image: "", // Add image URL here
    brief: "The Mahindra eVerito is an all-electric sedan designed for eco-conscious urban commuters, providing a balance of comfort, space, and zero-emission performance.",
    price: "₹9.13 - ₹13.43 Lakh*",
    specifications: {
        "Battery Capacity": "288 Ah",
        Power: "41.57 bhp",
        Torque: "91 Nm",
        "Seating Capacity": "5",
        "Drive Type": "FWD",
        Mileage: "110 km per charge",
        "Fuel Type": "Electric",
        Transmission: "Automatic",
        Length: "4247 mm",
        Width: "1740 mm",
        Wheelbase: "2630 mm"
    },
    variants: [
        { name: "D2", price: "₹9.13 Lakh" },
        { name: "D4", price: "₹9.75 Lakh" },
        { name: "D6", price: "₹10.00 Lakh" }
    ],
    pros: [
        "Zero tailpipe emissions",
        "Spacious interior",
        "Low running costs",
        "Automatic transmission for ease of driving",
        "Suitable for city commutes"
    ],
    cons: [
        "Limited driving range compared to conventional vehicles",
        "Charging infrastructure may be inadequate in some areas",
        "Performance may not match traditional fuel vehicles",
        "High initial purchase price",
        "Limited availability in certain regions"
    ],
    mileage: [
        { fuelType: "Electric", transmission: "Automatic", mileage: "110 km per charge" }
    ],
    colours: [
        { name: "Diamond White", image: "" }, // Add image URL here
        { name: "Desat Silver", image: "" }, // Add image URL here
        { name: "Java Brown", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Regenerative Braking",
        "Remote Diagnostics",
        "Touchscreen Infotainment System",
        "Reverse Parking Camera",
        "Keyless Entry",
        "GPS Navigation"
    ],
    reviews: []
},
"Mahindra XUV500": {
    type: "SUV",
    description: "A premium SUV offering a blend of luxury, performance, and advanced features.",
    image: "", // Add image URL here
    brief: "The Mahindra XUV500 is a premium SUV that combines luxury, performance, and advanced features, making it a popular choice among families and adventure enthusiasts.",
    price: "₹12.37 - ₹20.11 Lakh*",
    specifications: {
        Engine: "2179 cc",
        Power: "152.87 bhp @ 3750 rpm",
        Torque: "360 Nm @ 1750-2800 rpm",
        "Seating Capacity": "7",
        "Drive Type": "FWD/AWD",
        Mileage: "11.1 - 16 kmpl",
        "Fuel Type": "Diesel/Petrol",
        Transmission: "Manual/Automatic",
        "Fuel Tank Capacity": "70 Litres",
        "Ground Clearance": "200 mm"
    },
    variants: [
        { name: "W5", price: "₹12.37 Lakh" },
        { name: "W7", price: "₹13.85 Lakh" },
        { name: "W9", price: "₹15.58 Lakh" },
        { name: "W11 (O)", price: "₹17.08 Lakh" },
        { name: "W11 (O) AWD", price: "₹18.88 Lakh" },
        { name: "G AT Petrol", price: "₹16.16 Lakh" }
    ],
    pros: [
        "Spacious and comfortable cabin",
        "Powerful engine performance",
        "Feature-rich with modern technology",
        "Good ground clearance for rough terrains",
        "Multiple seating configurations"
    ],
    cons: [
        "Fuel efficiency could be better",
        "Third-row seating may feel cramped",
        "Interior plastic quality could be improved",
        "High maintenance costs",
        "Limited rear visibility"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "16 kmpl" },
        { fuelType: "Diesel", transmission: "Automatic", mileage: "14 kmpl" },
        { fuelType: "Petrol", transmission: "Automatic", mileage: "11.1 kmpl" }
    ],
    colours: [
        { name: "Crimson Red", image: "" }, // Add image URL here
        { name: "Mystic Copper", image: "" }, // Add image URL here
        { name: "Volcano Black", image: "" }, // Add image URL here
        { name: "Lake Side Brown", image: "" }, // Add image URL here
        { name: "Pearl White", image: "" }, // Add image URL here
        { name: "Moondust Silver", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Electric Sunroof",
        "7-inch Touchscreen Infotainment System",
        "Android Auto and Apple CarPlay",
        "Reverse Parking Camera",
        "Cruise Control",
        "Automatic Climate Control"
    ],
    reviews: []
},
"Mahindra TUV300": {
    type: "SUV",
    description: "A compact SUV with a boxy design, offering ruggedness and practicality.",
    image: "", // Add image URL here
    brief: "The Mahindra TUV300 is a compact SUV known for its rugged boxy design, practicality, and robust performance, making it suitable for both urban and off-road adventures.",
    price: "₹8.59 - ₹10.61 Lakh*",
    specifications: {
        Engine: "1493 cc mHawk100 Diesel",
        Power: "100 bhp @ 3750 rpm",
        Torque: "240 Nm @ 1600-2800 rpm",
        "Seating Capacity": "7",
        "Drive Type": "RWD",
        Mileage: "18.49 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "Manual",
        "Fuel Tank Capacity": "60 Litres",
        "Ground Clearance": "184 mm",
        Length: "3995 mm",
        Width: "1795 mm",
        Wheelbase: "2680 mm"
    },
    variants: [
        { name: "T4 Plus", price: "₹8.59 Lakh" },
        { name: "T6 Plus", price: "₹9.19 Lakh" },
        { name: "T8", price: "₹9.82 Lakh" },
        { name: "T10", price: "₹10.05 Lakh" },
        { name: "T10 Dual Tone", price: "₹10.29 Lakh" },
        { name: "T10 (O)", price: "₹10.38 Lakh" },
        { name: "T10 (O) Dual Tone", price: "₹10.61 Lakh" }
    ],
    pros: [
        "Rugged and robust design",
        "Spacious cabin with seating for seven",
        "Good fuel efficiency",
        "High ground clearance suitable for rough terrains",
        "Competitive pricing"
    ],
    cons: [
        "Interior plastic quality could be improved",
        "Engine performance may feel underpowered on highways",
        "Limited features compared to competitors",
        "Third-row seating is cramped",
        "No automatic transmission option"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "18.49 kmpl" }
    ],
    colours: [
        { name: "Bold Black", image: "" }, // Add image URL here
        { name: "Majestic Silver", image: "" }, // Add image URL here
        { name: "Pearl White", image: "" }, // Add image URL here
        { name: "Dynamo Red", image: "" }, // Add image URL here
        { name: "Molten Orange", image: "" }, // Add image URL here
        { name: "Glacier White", image: "" }, // Add image URL here
        { name: "Misty Silver", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Micro-Hybrid Technology",
        "Dual Airbags",
        "ABS with EBD",
        "7-inch Touchscreen Infotainment System",
        "Steering Mounted Audio Controls",
        "Static Bending Headlamps"
    ],
    reviews: []
},
"Mahindra NuvoSport": {
    type: "SUV",
    description: "A compact SUV with sporty styling and efficient performance.",
    image: "", // Add image URL here
    brief: "The Mahindra NuvoSport is a compact SUV featuring sporty styling and efficient performance, designed to cater to urban commuters seeking a blend of practicality and aesthetics.",
    price: "₹7.77 - ₹10.26 Lakh*",
    specifications: {
        Engine: "1.5L mHawk Diesel",
        Power: "100 bhp @ 3750 rpm",
        Torque: "240 Nm @ 1600-2800 rpm",
        "Seating Capacity": "7",
        "Drive Type": "Rear Wheel Drive",
        Mileage: "17.4 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "5-speed Manual / AMT",
        "Fuel Tank Capacity": "60 Litres",
        "Ground Clearance": "180 mm",
        Length: "3985 mm",
        Width: "1850 mm",
        Height: "1870 mm",
        Wheelbase: "2760 mm"
    },
    variants: [
        { name: "N4", price: "₹7.77 Lakh" },
        { name: "N4 Plus", price: "₹8.17 Lakh" },
        { name: "N6", price: "₹8.87 Lakh" },
        { name: "N6 AMT", price: "₹9.52 Lakh" },
        { name: "N8", price: "₹9.65 Lakh" },
        { name: "N8 AMT", price: "₹10.26 Lakh" }
    ],
    pros: [
        "Sporty and aggressive exterior design",
        "Spacious cabin with flexible seating arrangements",
        "Efficient diesel engine with good torque",
        "Availability of automatic transmission (AMT)",
        "Competitive pricing in its segment"
    ],
    cons: [
        "Interior design and materials could be more premium",
        "Ride quality may feel firm over rough surfaces",
        "Limited boot space with all seats in use",
        "Rear visibility can be restricted due to design",
        "Discontinued model; availability may be limited"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "17.4 kmpl" },
        { fuelType: "Diesel", transmission: "AMT", mileage: "17.4 kmpl" }
    ],
    colours: [
        { name: "Rust Orange", image: "" }, // Add image URL here
        { name: "Diamond White", image: "" }, // Add image URL here
        { name: "Molten Red", image: "" }, // Add image URL here
        { name: "Regal Blue", image: "" }, // Add image URL here
        { name: "Mist Silver", image: "" }, // Add image URL here
        { name: "Fiery Black", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Micro-Hybrid Technology",
        "7-inch Touchscreen Infotainment System",
        "Steering Mounted Audio Controls",
        "Dual Airbags and ABS with EBD",
        "LED Daytime Running Lights",
        "Eco Mode for enhanced fuel efficiency"
    ],
    reviews: []
},
"Mahindra Quanto": {
    type: "SUV",
    description: "A compact SUV offering space and versatility for urban families.",
    image: "", // Add image URL here
    brief: "The Mahindra Quanto is a compact SUV designed to provide ample space and versatility, making it an ideal choice for urban families seeking practicality and comfort.",
    price: "₹6.99 - ₹8.55 Lakh*",
    specifications: {
        Engine: "1493 cc mCR100 Diesel",
        Power: "100 bhp @ 3750 rpm",
        Torque: "240 Nm @ 1600-2800 rpm",
        "Seating Capacity": "7",
        "Drive Type": "Rear Wheel Drive",
        Mileage: "17.21 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "5-speed Manual",
        "Fuel Tank Capacity": "55 Litres",
        "Ground Clearance": "180 mm",
        Length: "3985 mm",
        Width: "1850 mm",
        Height: "1880 mm",
        Wheelbase: "2760 mm"
    },
    variants: [
        { name: "C2", price: "₹6.78 Lakh" },
        { name: "C4", price: "₹7.33 Lakh" },
        { name: "C6", price: "₹7.80 Lakh" },
        { name: "C8", price: "₹8.31 Lakh" }
    ],
    pros: [
        "Spacious interior with 7-seater configuration",
        "Compact dimensions suitable for city driving",
        "Robust diesel engine with good torque",
        "Competitive pricing",
        "High ground clearance for varied terrains"
    ],
    cons: [
        "Interior design and material quality could be improved",
        "Third-row seating may be cramped for adults",
        "Limited boot space with all seats in use",
        "No automatic transmission option",
        "Discontinued model; availability may be limited"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "17.21 kmpl" }
    ],
    colours: [
        { name: "Fiery Black", image: "" }, // Add image URL here
        { name: "Mist Silver", image: "" }, // Add image URL here
        { name: "Toreador Red", image: "" }, // Add image URL here
        { name: "Java Brown", image: "" }, // Add image URL here
        { name: "Diamond White", image: "" }, // Add image URL here
        { name: "Rocky Beige", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Micro-Hybrid Technology",
        "Dual Airbags and ABS with EBD",
        "2-DIN Audio System with CD/MP3/USB/AUX",
        "Steering Mounted Audio Controls",
        "Foldable Second and Third-Row Seats",
        "Digital Drive Assist System"
    ],
    reviews: []
},
"Mahindra Verito": {
    type: "Sedan",
    description: "A spacious sedan offering comfort and practicality for families.",
    image: "", // Add image URL here
    brief: "The Mahindra Verito is a reliable and spacious sedan designed to provide comfort and practicality for families, featuring a robust build and efficient performance.",
    price: "₹5.28 - ₹11.80 Lakh*",
    specifications: {
        Engine: "1.5L dCi CRDi Diesel",
        Power: "65 bhp @ 4000 rpm",
        Torque: "160 Nm @ 2000 rpm",
        "Seating Capacity": "5",
        "Drive Type": "Front Wheel Drive",
        Mileage: "21 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "5-speed Manual",
        "Fuel Tank Capacity": "50 Litres",
        "Ground Clearance": "172 mm",
        Length: "4247 mm",
        Width: "1740 mm",
        Height: "1540 mm",
        Wheelbase: "2630 mm"
    },
    variants: [
        { name: "1.5 D2", price: "₹7.30 Lakh" },
        { name: "1.5 D4", price: "₹7.54 Lakh" },
        { name: "1.5 D6", price: "₹8.26 Lakh" }
    ],
    pros: [
        "Spacious and comfortable interior",
        "Robust build quality",
        "Fuel-efficient diesel engine",
        "Ample boot space",
        "Competitive pricing"
    ],
    cons: [
        "Dated interior design",
        "Limited features compared to competitors",
        "No petrol engine option",
        "Discontinued model; availability may be limited",
        "Resale value may be lower"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "21 kmpl" }
    ],
    colours: [
        { name: "Toreador Red", image: "" }, // Add image URL here
        { name: "Fiery Black", image: "" }, // Add image URL here
        { name: "Java Brown", image: "" }, // Add image URL here
        { name: "Mist Silver", image: "" }, // Add image URL here
        { name: "Diamond White", image: "" }, // Add image URL here
        { name: "Rocky Beige", image: "" }, // Add image URL here
        { name: "Dolphin Grey", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Power Steering",
        "Air Conditioning",
        "Front and Rear Power Windows",
        "Central Locking",
        "ABS with EBD",
        "Driver Airbag"
    ],
    reviews: []
},
"Mahindra Xylo": {
    type: "MPV",
    description: "A multi-purpose vehicle offering space and comfort for large families.",
    image: "", // Add image URL here
    brief: "The Mahindra Xylo is a versatile multi-purpose vehicle (MPV) designed to provide ample space and comfort, making it an ideal choice for large families and group travel.",
    price: "₹8.86 - ₹12.13 Lakh*",
    specifications: {
        Engine: "2.2L mHawk Diesel / 2.5L mDI CRDe Diesel",
        Power: "95 - 120 bhp",
        Torque: "218 - 280 Nm",
        "Seating Capacity": "7-8",
        "Drive Type": "Rear Wheel Drive",
        Mileage: "13.9 - 14.95 kmpl",
        "Fuel Type": "Diesel",
        Transmission: "5-speed Manual",
        "Fuel Tank Capacity": "55 Litres",
        "Ground Clearance": "186 mm",
        Length: "4520 mm",
        Width: "1850 mm",
        Height: "1905 mm",
        Wheelbase: "2760 mm"
    },
    variants: [
        { name: "D2", price: "₹8.86 Lakh" },
        { name: "D4", price: "₹9.10 Lakh" },
        { name: "H4", price: "₹9.85 Lakh" },
        { name: "H8", price: "₹10.60 Lakh" },
        { name: "H8 ABS", price: "₹11.10 Lakh" },
        { name: "H9", price: "₹12.13 Lakh" }
    ],
    pros: [
        "Spacious interior with flexible seating arrangements",
        "Robust build quality suitable for varied terrains",
        "Powerful diesel engine options",
        "Competitive pricing in its segment",
        "Ample boot space for luggage"
    ],
    cons: [
        "Dated interior design compared to newer models",
        "Limited features in base variants",
        "No petrol engine option",
        "Discontinued model; availability may be limited",
        "Ride quality can be bumpy on uneven roads"
    ],
    mileage: [
        { fuelType: "Diesel", transmission: "Manual", mileage: "13.9 - 14.95 kmpl" }
    ],
    colours: [
        { name: "Fiery Black", image: "" }, // Add image URL here
        { name: "Java Brown", image: "" }, // Add image URL here
        { name: "Mist Silver", image: "" }, // Add image URL here
        { name: "Diamond White", image: "" }, // Add image URL here
        { name: "Dolphin Grey", image: "" }, // Add image URL here
        { name: "Molten Red", image: "" } // Add image URL here
    ],
    exteriorImages: [
        // Add exterior image URLs here
    ],
    interiorImages: [
        // Add interior image URLs here
    ],
    topFeatures: [
        "Digital Drive Assist System",
        "Foldable Flight Trays",
        "Intellipark Reverse Assist",
        "Dual Airbags and ABS with EBD",
        "Steering Mounted Audio Controls",
        "Voice Command Technology"
    ],
    reviews: []
},

 "Honda Amaze": {
      "type": "Sedan",
      "description": "A compact sedan offering a blend of comfort and efficiency, ideal for urban commuting.",
      "image": "",
      "brief": "The 2025 Honda Amaze is a stylish and efficient compact sedan, perfect for urban commuting with its comfortable interiors and reliable performance.",
      "price": "₹8.00 - ₹10.90 Lakh*",
      "specifications": {
        "Engine": "1.2L i-VTEC Petrol",
        "Power": "90 PS",
        "Torque": "110 Nm",
        "Seating Capacity": "5",
        "Drive Type": "Front Wheel Drive",
        "Mileage": "18.65 - 19.46 kmpl",
        "Fuel Type": "Petrol",
        "Transmission": "5-speed Manual / CVT",
        "Fuel Tank Capacity": "35 Litres",
        "Ground Clearance": "172 mm",
        "Length": "3995 mm",
        "Width": "1733 mm",
        "Height": "1500 mm",
        "Wheelbase": "2470 mm"
      },
      "variants": [
        { "name": "V 1.2 Petrol MT", "price": "₹8.00 Lakh" },
        { "name": "VX 1.2 Petrol MT", "price": "₹9.00 Lakh" },
        { "name": "V 1.2 Petrol CVT", "price": "₹9.35 Lakh" },
        { "name": "VX 1.2 Petrol CVT", "price": "₹10.35 Lakh" },
        { "name": "ZX 1.2 Petrol MT", "price": "₹10.00 Lakh" },
        { "name": "ZX 1.2 Petrol CVT", "price": "₹10.90 Lakh" }
      ],
      "pros": [
        "Fuel-efficient engine suitable for city driving",
        "Spacious and comfortable cabin",
        "Smooth CVT option for automatic enthusiasts",
        "Reliable build quality",
        "Ample boot space of 416 liters"
      ],
      "cons": [
        "No diesel engine option available",
        "Rear seat headroom might be limited for taller passengers",
        "Some competitors offer more powerful engine options",
        "Lacks features like a sunroof",
        "Interior design is functional but not very premium"
      ],
      "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.65 kmpl" },
        { "fuelType": "Petrol", "transmission": "CVT", "mileage": "19.46 kmpl" }
      ],
      "colours": [
        { "name": "Radiant Red Metallic", "image": "" },
        { "name": "Lunar Silver Metallic", "image": "" },
        { "name": "Platinum White Pearl", "image": "" },
        { "name": "Golden Brown Metallic", "image": "" },
        { "name": "Meteoroid Grey Metallic", "image": "" },
        { "name": "Sapphire Blue Metallic", "image": "" }
      ],
      "exteriorImages": [],
      "interiorImages": [],
      "topFeatures": [
        "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
        "Automatic Climate Control",
        "Cruise Control",
        "Rear Parking Camera with Guidelines",
        "Push Button Start/Stop",
        "Steering Mounted Audio Controls"
      ],
      "reviews": []
},

"Honda City": {
    "type": "Sedan",
    "description": "A premium sedan known for its spacious interior and advanced features.",
    "image": "",
    "brief": "The 2025 Honda City is a sophisticated sedan offering a blend of comfort, performance, and cutting-edge technology, making it an ideal choice for urban and highway driving.",
    "price": "₹11.86 - ₹16.59 Lakh*",
    "specifications": {
      "Engine": "1.5L i-VTEC Petrol",
      "Power": "121 PS",
      "Torque": "145 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "17.8 - 18.4 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "6-speed Manual / CVT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "165 mm",
      "Length": "4583 mm",
      "Width": "1748 mm",
      "Height": "1489 mm",
      "Wheelbase": "2600 mm"
    },
    "variants": [
      { "name": "V MT", "price": "₹11.86 Lakh" },
      { "name": "VX MT", "price": "₹13.50 Lakh" },
      { "name": "ZX MT", "price": "₹14.75 Lakh" },
      { "name": "V CVT", "price": "₹13.20 Lakh" },
      { "name": "VX CVT", "price": "₹14.85 Lakh" },
      { "name": "ZX CVT", "price": "₹16.59 Lakh" }
    ],
    "pros": [
      "Spacious and comfortable interior",
      "Fuel-efficient engine",
      "Advanced safety features with Honda Sensing",
      "Smooth and responsive CVT transmission",
      "Large 506-litre boot space"
    ],
    "cons": [
      "Higher variants are relatively expensive",
      "No diesel engine option available",
      "Rear seat headroom might be limited for taller passengers",
      "Some competitors offer more powerful engine options",
      "Lacks features like a sunroof in lower variants"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "17.8 kmpl" },
      { "fuelType": "Petrol", "transmission": "CVT", "mileage": "18.4 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Platinum White Pearl", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" },
      { "name": "Meteoroid Grey Metallic", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Guidelines",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Honda Sensing Safety Suite"
    ],
    "reviews": []
  },
  "Honda City Hybrid": {
    "type": "Sedan",
    "description": "The hybrid variant of the City, offering enhanced fuel efficiency and eco-friendly performance.",
    "image": "",
    "brief": "The 2025 Honda City Hybrid combines advanced hybrid technology with the elegance and comfort of the City lineup, delivering exceptional fuel efficiency and a premium driving experience.",
    "price": "₹19.04 - ₹20.79 Lakh*",
    "specifications": {
      "Engine": "1.5L Atkinson-Cycle DOHC i-VTEC Petrol",
      "Power": "126 PS",
      "Torque": "253 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "26.5 kmpl",
      "Fuel Type": "Petrol-Electric Hybrid",
      "Transmission": "e-CVT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "165 mm",
      "Length": "4583 mm",
      "Width": "1748 mm",
      "Height": "1489 mm",
      "Wheelbase": "2600 mm"
    },
    "variants": [
      { "name": "V e:HEV", "price": "₹19.04 Lakh" },
      { "name": "VX e:HEV", "price": "₹19.92 Lakh" },
      { "name": "ZX e:HEV", "price": "₹20.79 Lakh" }
    ],
    "pros": [
      "Outstanding fuel efficiency of 26.5 kmpl",
      "Advanced safety features with Honda Sensing",
      "Smooth and responsive e-CVT transmission",
      "Spacious and comfortable interior",
      "Hybrid system allows for pure electric drive at low speeds"
    ],
    "cons": [
      "Higher initial cost compared to non-hybrid variants",
      "Reduced boot space due to battery placement",
      "Exterior design remains similar to standard City model",
      "Lacks features like ventilated seats",
      "8-inch infotainment touchscreen is smaller than some rivals"
    ],
    "mileage": [
      { "fuelType": "Petrol-Electric Hybrid", "transmission": "e-CVT", "mileage": "26.5 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Platinum White Pearl", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" },
      { "name": "Meteoroid Grey Metallic", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "Honda Sensing Safety Suite",
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Guidelines",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls"
    ],
    "reviews": []
  },
  "Honda Elevate": {
    "type": "SUV",
    "description": "A mid-size SUV featuring modern design and advanced technology, suitable for both city and off-road driving.",
    "image": "",
    "brief": "The 2025 Honda Elevate is a versatile mid-size SUV that combines contemporary design with advanced technology, offering a comfortable and efficient driving experience for both urban and adventurous journeys.",
    "price": "₹11.73 - ₹16.93 Lakh*",
    "specifications": {
      "Engine": "1.5L i-VTEC DOHC Petrol",
      "Power": "121 PS",
      "Torque": "145 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "15.31 - 16.92 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "6-speed Manual / CVT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "220 mm",
      "Length": "4312 mm",
      "Width": "1790 mm",
      "Height": "1650 mm",
      "Wheelbase": "2650 mm"
    },
    "variants": [
      { "name": "SV MT", "price": "₹11.73 Lakh" },
      { "name": "V MT", "price": "₹12.50 Lakh" },
      { "name": "VX MT", "price": "₹13.50 Lakh" },
      { "name": "ZX MT", "price": "₹14.75 Lakh" },
      { "name": "V CVT", "price": "₹13.20 Lakh" },
      { "name": "VX CVT", "price": "₹14.85 Lakh" },
      { "name": "ZX CVT", "price": "₹16.93 Lakh" }
    ],
    "pros": [
      "Spacious and comfortable interior",
      "High ground clearance suitable for varied terrains",
      "Advanced safety features",
      "Fuel-efficient engine",
      "Ample boot space of 458 liters"
    ],
    "cons": [
      "No diesel engine option available",
      "Some competitors offer more powerful engine options",
      "Lacks features like a panoramic sunroof",
      "Rear seat headroom might be limited for taller passengers",
      "Higher variants are relatively expensive"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "15.31 kmpl" },
      { "fuelType": "Petrol", "transmission": "CVT", "mileage": "16.92 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Platinum White Pearl", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" },
      { "name": "Meteoroid Grey Metallic", "image": "" },
      { "name": "Obsidian Blue Pearl", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Guidelines",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Advanced Safety Features"
    ],
    "reviews": []
  },
  "Honda WR-V": {
    "type": "SUV",
    "description": "A compact SUV designed for urban adventures, offering high ground clearance and versatile features.",
    "image": "",
    "brief": "The Honda WR-V is a compact SUV that combines modern design with practical features, making it ideal for city driving and weekend getaways.",
    "price": "₹9.25 - ₹12.41 Lakh*",
    "specifications": {
      "Engine": "1.2L i-VTEC Petrol / 1.5L i-DTEC Diesel",
      "Power": "89 bhp (Petrol) / 99 bhp (Diesel)",
      "Torque": "110 Nm (Petrol) / 200 Nm (Diesel)",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "16.5 - 23.7 kmpl",
      "Fuel Type": "Petrol / Diesel",
      "Transmission": "5-speed Manual (Petrol) / 6-speed Manual (Diesel)",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "188 mm",
      "Length": "3999 mm",
      "Width": "1734 mm",
      "Height": "1601 mm",
      "Wheelbase": "2555 mm"
    },
    "variants": [
      { "name": "SV MT Petrol", "price": "₹9.25 Lakh" },
      { "name": "VX MT Petrol", "price": "₹10.50 Lakh" },
      { "name": "SV MT Diesel", "price": "₹11.00 Lakh" },
      { "name": "VX MT Diesel", "price": "₹12.41 Lakh" }
    ],
    "pros": [
      "Spacious and comfortable cabin",
      "High ground clearance suitable for varied terrains",
      "Fuel-efficient diesel engine",
      "Reliable build quality",
      "Ample boot space of 363 liters"
    ],
    "cons": [
      "No automatic transmission option",
      "Interior design is functional but lacks premium feel",
      "Rear AC vents are absent",
      "Limited features compared to competitors",
      "Petrol engine performance is modest"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16.5 kmpl" },
      { "fuelType": "Diesel", "transmission": "Manual", "mileage": "23.7 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Modern Steel Metallic", "image": "" },
      { "name": "White Orchid Pearl", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" },
      { "name": "Premium Amber Metallic", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "Electric Sunroof",
      "7-inch Touchscreen Infotainment System with Navigation",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Sensors",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls"
    ],
    "reviews": []
  },
  "Honda Jazz": {
    "type": "Hatchback",
    "description": "A premium hatchback with a spacious cabin and advanced safety features.",
    "image": "",
    "brief": "The 2025 Honda Jazz is a versatile hatchback that combines modern design with practicality, offering a spacious interior and advanced technology for urban commuters.",
    "price": "₹8.01 - ₹10.32 Lakh*",
    "specifications": {
      "Engine": "1.2L i-VTEC Petrol",
      "Power": "90 PS",
      "Torque": "110 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "16.6 - 17.1 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "5-speed Manual / CVT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "165 mm",
      "Length": "3989 mm",
      "Width": "1694 mm",
      "Height": "1544 mm",
      "Wheelbase": "2530 mm"
    },
    "variants": [
      { "name": "V MT Petrol", "price": "₹8.01 Lakh" },
      { "name": "VX MT Petrol", "price": "₹8.70 Lakh" },
      { "name": "V CVT Petrol", "price": "₹9.17 Lakh" },
      { "name": "ZX MT Petrol", "price": "₹9.34 Lakh" },
      { "name": "VX CVT Petrol", "price": "₹9.70 Lakh" }
    ],
    "pros": [
      "Spacious and comfortable cabin",
      "Fuel-efficient engine",
      "Advanced safety features",
      "Smooth CVT option for automatic enthusiasts",
      "Ample boot space of 354 liters"
    ],
    "cons": [
      "No diesel engine option available",
      "Lacks rear AC vents",
      "Some competitors offer more powerful engine options",
      "Interior design is functional but not very premium",
      "Limited ground clearance compared to some rivals"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16.6 kmpl" },
      { "fuelType": "Petrol", "transmission": "CVT", "mileage": "17.1 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "White Orchid Pearl", "image": "" },
      { "name": "Modern Steel Metallic", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Guidelines",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls"
    ],
    "reviews": []
  },
  "Honda Civic": {
    "type": "Sedan",
    "description": "A stylish sedan known for its performance and premium features.",
    "image": "",
    "brief": "The 2025 Honda Civic is a sleek and efficient compact sedan that combines performance with comfort, making it ideal for both city and highway driving.",
    "price": "₹17.95 - ₹22.36 Lakh*",
    "specifications": {
      "Engine": "1.8L i-VTEC Petrol",
      "Power": "141 PS",
      "Torque": "174 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "16.5 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "CVT Automatic",
      "Fuel Tank Capacity": "47 Litres",
      "Ground Clearance": "171 mm",
      "Length": "4656 mm",
      "Width": "1799 mm",
      "Height": "1433 mm",
      "Wheelbase": "2700 mm"
    },
    "variants": [
      { "name": "V CVT Petrol", "price": "₹17.95 Lakh" },
      { "name": "VX CVT Petrol", "price": "₹20.75 Lakh" },
      { "name": "ZX CVT Petrol", "price": "₹22.36 Lakh" }
    ],
    "pros": [
      "Sleek and modern exterior design",
      "Comfortable and spacious interior",
      "Advanced safety features",
      "Smooth and responsive CVT transmission",
      "Reliable build quality"
    ],
    "cons": [
      "No diesel engine option available",
      "Higher variants are relatively expensive",
      "Rear seat headroom might be limited for taller passengers",
      "Some competitors offer more powerful engine options",
      "Lacks features like a sunroof in lower variants"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16.5 kmpl" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Platinum White Pearl", "image": "" },
      { "name": "Golden Brown Metallic", "image": "" },
      { "name": "Modern Steel Metallic", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Cruise Control",
      "Rear Parking Camera with Guidelines",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Honda Sensing Safety Suite"
    ],
    "reviews": []
  },
  "Honda Accord": {
    "type": "Sedan",
    "description": "A luxury sedan offering a blend of performance, comfort, and advanced technology.",
    "image": "",
    "brief": "The 2025 Honda Accord is a luxury sedan that combines performance, comfort, and advanced technology, making it an excellent choice for discerning drivers.",
    "price": "₹26 - ₹36 Lakh*",
    "specifications": {
      "Engine": "1.5L Turbocharged In-Line 4-Cylinder",
      "Power": "192 hp @ 6000 rpm",
      "Torque": "192 lb-ft @ 1700 - 5000 rpm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "30 mpg city / 38 mpg highway",
      "Fuel Type": "Petrol",
      "Transmission": "CVT Automatic",
      "Fuel Tank Capacity": "56.8 Litres",
      "Ground Clearance": "171 mm",
      "Length": "4656 mm",
      "Width": "1862 mm",
      "Height": "1450 mm",
      "Wheelbase": "2830 mm"
    },
    "variants": [
      { "name": "Accord LX", "price": "₹26 Lakh" },
      { "name": "Accord EX", "price": "₹29 Lakh" },
      { "name": "Accord Sport", "price": "₹32 Lakh" },
      { "name": "Accord Touring Hybrid", "price": "₹36 Lakh" }
    ],
    "pros": [
      "Luxurious and spacious interior",
      "Advanced safety features",
      "Fuel-efficient engine options",
      "Smooth and responsive handling",
      "High resale value"
    ],
    "cons": [
      "Higher initial cost compared to some competitors",
      "No all-wheel-drive option",
      "Limited rear headroom for taller passengers",
      "Infotainment system may be complex for some users",
      "Hybrid variant availability may be limited in certain regions"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "30 mpg city / 38 mpg highway" },
      { "fuelType": "Hybrid", "transmission": "Automatic", "mileage": "46 mpg city / 41 mpg highway" }
    ],
    "colours": [
      { "name": "Radiant Red Metallic", "image": "" },
      { "name": "Lunar Silver Metallic", "image": "" },
      { "name": "Platinum White Pearl", "image": "" },
      { "name": "Modern Steel Metallic", "image": "" },
      { "name": "Crystal Black Pearl", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "10.2-inch Digital Instrument Cluster",
      "12.3-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Wireless Charging Pad",
      "Honda Sensing Safety Suite",
      "Dual-Zone Automatic Climate Control",
      "Leather-Trimmed Seats",
      "Power Moonroof"
    ],
    "reviews": []
  },
  "Ford Figo": {
    "type": "Hatchback",
    "description": "A compact hatchback known for its sporty design and efficient performance.",
    "image": "",
    "brief": "The Ford Figo is a compact hatchback that combines sporty aesthetics with efficient performance, making it ideal for urban commuting.",
    "price": "₹5.23 - ₹8.37 Lakh*",
    "specifications": {
      "Engine": "1.2L Petrol / 1.5L Diesel",
      "Power": "94.93 - 121 bhp",
      "Torque": "119 Nm - 215 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "16 - 25.5 kmpl",
      "Fuel Type": "Petrol / Diesel",
      "Transmission": "Manual / Automatic",
      "Fuel Tank Capacity": "42 Litres",
      "Ground Clearance": "174 mm",
      "Length": "3941 mm",
      "Width": "1704 mm",
      "Height": "1525 mm",
      "Wheelbase": "2490 mm"
    },
    "variants": [
      { "name": "1.2P Ambiente MT", "price": "₹5.23 Lakh" },
      { "name": "1.2P Trend MT", "price": "₹5.99 Lakh" },
      { "name": "1.2P Titanium MT", "price": "₹6.80 Lakh" },
      { "name": "1.5D Ambiente MT", "price": "₹6.00 Lakh" },
      { "name": "1.5D Trend MT", "price": "₹6.75 Lakh" },
      { "name": "1.5D Titanium MT", "price": "₹7.60 Lakh" }
    ],
    "pros": [
      "Sporty and stylish design",
      "Fuel-efficient engine options",
      "Spacious cabin for a hatchback",
      "Good handling and ride quality",
      "Competitive pricing"
    ],
    "cons": [
      "Limited availability due to discontinuation",
      "Resale value may be affected",
      "After-sales service network may be limited",
      "Interior design is functional but lacks premium feel",
      "Some competitors offer more advanced features"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16 - 18 kmpl" },
      { "fuelType": "Diesel", "transmission": "Manual", "mileage": "23 - 25.5 kmpl" }
    ],
    "colours": [
      { "name": "Diamond White", "image": "" },
      { "name": "Moondust Silver", "image": "" },
      { "name": "Smoke Grey", "image": "" },
      { "name": "Absolute Black", "image": "" },
      { "name": "Deep Impact Blue", "image": "" },
      { "name": "Ruby Red", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System",
      "Automatic Climate Control",
      "Rear Parking Sensors",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Dual Front Airbags"
    ],
    "reviews": []
  },
  "Ford Freestyle": {
    "type": "Hatchback",
    "description": "A cross-hatch offering a higher ground clearance and rugged styling.",
    "image": "",
    "brief": "The Ford Freestyle is a crossover hatchback that combines rugged styling with higher ground clearance, making it suitable for both urban and light off-road driving.",
    "price": "₹5.91 - ₹9.03 Lakh*",
    "specifications": {
      "Engine": "1.2L Petrol / 1.5L Diesel",
      "Power": "94.68 - 98.96 bhp",
      "Torque": "119 Nm - 215 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "18.5 - 24.4 kmpl",
      "Fuel Type": "Petrol / Diesel",
      "Transmission": "Manual",
      "Fuel Tank Capacity": "42 Litres",
      "Ground Clearance": "190 mm",
      "Length": "3954 mm",
      "Width": "1737 mm",
      "Height": "1570 mm",
      "Wheelbase": "2490 mm"
    },
    "variants": [
      { "name": "Ambiente 1.2 Ti-VCT", "price": "₹5.91 Lakh" },
      { "name": "Trend 1.2 Ti-VCT", "price": "₹6.33 Lakh" },
      { "name": "Titanium 1.2 Ti-VCT", "price": "₹6.99 Lakh" },
      { "name": "Ambiente 1.5 TDCi", "price": "₹6.76 Lakh" },
      { "name": "Trend 1.5 TDCi", "price": "₹7.18 Lakh" },
      { "name": "Titanium 1.5 TDCi", "price": "₹7.74 Lakh" }
    ],
    "pros": [
      "Rugged and stylish design",
      "Higher ground clearance suitable for varied terrains",
      "Fuel-efficient engine options",
      "Spacious and comfortable interior",
      "Competitive pricing"
    ],
    "cons": [
      "Limited availability due to discontinuation",
      "Resale value may be affected",
      "After-sales service network may be limited",
      "Lacks automatic transmission option",
      "Some competitors offer more advanced features"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.5 kmpl" },
      { "fuelType": "Diesel", "transmission": "Manual", "mileage": "24.4 kmpl" }
    ],
    "colours": [
      { "name": "Diamond White", "image": "" },
      { "name": "Moondust Silver", "image": "" },
      { "name": "Smoke Grey", "image": "" },
      { "name": "Absolute Black", "image": "" },
      { "name": "Canyon Ridge", "image": "" },
      { "name": "White Gold", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "Automatic Climate Control",
      "Rear Parking Sensors",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Dual Front Airbags"
    ],
    "reviews": []
  },
  "Ford Aspire": {
    "type": "Sedan",
    "description": "A compact sedan with a focus on comfort and advanced features.",
    "image": "",
    "brief": "The Ford Aspire is a compact sedan that emphasizes comfort and comes equipped with advanced features, making it a suitable choice for urban commuters.",
    "price": "₹5.99 - ₹9.11 Lakh*",
    "specifications": {
      "Engine": "1.2L Petrol / 1.5L Diesel",
      "Power": "94.68 - 98.96 bhp",
      "Torque": "119 Nm - 215 Nm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "16.3 - 26.1 kmpl",
      "Fuel Type": "Petrol / Diesel",
      "Transmission": "Manual / Automatic",
      "Fuel Tank Capacity": "42 Litres",
      "Ground Clearance": "174 mm",
      "Length": "3954 mm",
      "Width": "1737 mm",
      "Height": "1570 mm",
      "Wheelbase": "2490 mm"
    },
    "variants": [
      { "name": "1.2 Ti-VCT Ambiente", "price": "₹5.99 Lakh" },
      { "name": "1.2 Ti-VCT Trend", "price": "₹6.87 Lakh" },
      { "name": "1.2 Ti-VCT Titanium", "price": "₹7.70 Lakh" },
      { "name": "1.5 TDCi Ambiente", "price": "₹7.49 Lakh" },
      { "name": "1.5 TDCi Trend", "price": "₹8.37 Lakh" },
      { "name": "1.5 TDCi Titanium", "price": "₹9.11 Lakh" }
    ],
    "pros": [
      "Comfortable and spacious interior",
      "Fuel-efficient engine options",
      "Advanced safety features",
      "Smooth ride quality",
      "Competitive pricing"
    ],
    "cons": [
      "Limited availability due to discontinuation",
      "Resale value may be affected",
      "After-sales service network may be limited",
      "Interior design is functional but lacks premium feel",
      "Some competitors offer more advanced features"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16.3 kmpl" },
      { "fuelType": "Diesel", "transmission": "Manual", "mileage": "26.1 kmpl" }
    ],
    "colours": [
      { "name": "White Gold", "image": "" },
      { "name": "Moondust Silver", "image": "" },
      { "name": "Smoke Grey", "image": "" },
      { "name": "Ruby Red", "image": "" },
      { "name": "Diamond White", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "7-inch Touchscreen Infotainment System",
      "Automatic Climate Control",
      "Rear Parking Sensors",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Dual Front Airbags"
    ],
    "reviews": []
  },

  "Ford EcoSport": {
    "type": "SUV",
    "description": "A compact SUV offering a blend of style, performance, and advanced features.",
    "image": "",
    "brief": "The Ford EcoSport is a compact SUV that combines stylish design with efficient performance, making it suitable for both city commutes and weekend getaways.",
    "price": "₹7.91 - ₹11.70 Lakh*",
    "specifications": {
      "Engine": "1.5L Ti-VCT Petrol / 1.5L TDCi Diesel",
      "Power": "121 bhp (Petrol) / 99 bhp (Diesel)",
      "Torque": "149 Nm (Petrol) / 215 Nm (Diesel)",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "14.8 - 22.26 kmpl",
      "Fuel Type": "Petrol / Diesel",
      "Transmission": "Manual / Automatic",
      "Fuel Tank Capacity": "52 Litres",
      "Ground Clearance": "200 mm",
      "Length": "3998 mm",
      "Width": "1765 mm",
      "Height": "1647 mm",
      "Wheelbase": "2519 mm"
    },
    "variants": [
      { "name": "1.5 Ti-VCT MT Ambiente (Petrol)", "price": "₹8.19 Lakh" },
      { "name": "1.5 TDCi Ambiente (Diesel)", "price": "₹8.89 Lakh" },
      { "name": "1.5 Ti-VCT AT Titanium (Petrol)", "price": "₹9.92 Lakh" },
      { "name": "1.5 TDCi Titanium (Diesel)", "price": "₹10.00 Lakh" },
      { "name": "1.5 Ti-VCT MT Titanium (Petrol)", "price": "₹9.99 Lakh" },
      { "name": "1.5 TDCi Titanium Plus (Diesel)", "price": "₹10.00 Lakh" }
    ],
    "pros": [
      "Compact size ideal for urban driving",
      "High ground clearance suitable for varied terrains",
      "Available in both petrol and diesel engine options",
      "Feature-rich across variants",
      "Competitive pricing in its segment"
    ],
    "cons": [
      "Limited rear seat space compared to competitors",
      "Boot space could be more generous",
      "Some rivals offer more powerful engine options",
      "Interior design feels dated",
      "Ford's service network is limited in certain areas"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "14.8 kmpl" },
      { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14.8 kmpl" },
      { "fuelType": "Diesel", "transmission": "Manual", "mileage": "22.26 kmpl" }
    ],
    "colours": [
      { "name": "Diamond White", "image": "" },
      { "name": "Moondust Silver", "image": "" },
      { "name": "Smoke Grey", "image": "" },
      { "name": "Absolute Black", "image": "" },
      { "name": "Lightning Blue", "image": "" },
      { "name": "Canyon Ridge", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen Infotainment System with SYNC 3",
      "Automatic Climate Control",
      "Rear Parking Camera with Sensors",
      "Push Button Start/Stop",
      "Steering Mounted Audio Controls",
      "Six Airbags for Enhanced Safety"
    ],
    "reviews": []
  },

  "Ford Endeavour": {
    "type": "SUV",
    "description": "A premium SUV with a focus on luxury, performance, and safety.",
    "image": "",
    "brief": "The Ford Endeavour is a premium SUV that combines luxury, robust performance, and advanced safety features, making it ideal for both urban commutes and off-road adventures.",
    "price": "₹29.19 - ₹36.26 Lakh*",
    "specifications": {
      "Engine": "2.0L EcoBlue Diesel",
      "Power": "167.62 bhp",
      "Torque": "420 Nm",
      "Seating Capacity": "7",
      "Drive Type": "Four-Wheel Drive",
      "Mileage": "12.4 - 14.2 kmpl",
      "Fuel Type": "Diesel",
      "Transmission": "10-speed Automatic",
      "Fuel Tank Capacity": "80 Litres",
      "Ground Clearance": "225 mm",
      "Length": "4903 mm",
      "Width": "1869 mm",
      "Height": "1837 mm",
      "Wheelbase": "2850 mm"
    },
    "variants": [
      { "name": "Titanium 4X2 AT", "price": "₹29.19 Lakh" },
      { "name": "Titanium+ 4X2 AT", "price": "₹31.55 Lakh" },
      { "name": "Titanium+ 4X4 AT", "price": "₹36.26 Lakh" }
    ],
    "pros": [
      "Robust build quality suitable for off-road conditions",
      "Spacious and luxurious interior",
      "Advanced safety features including multiple airbags and stability control",
      "Powerful engine with smooth automatic transmission",
      "High ground clearance for better off-road capability"
    ],
    "cons": [
      "High maintenance and service costs",
      "Fuel efficiency could be better",
      "Large size may be challenging in tight urban spaces",
      "Limited availability due to brand's market strategy",
      "Resale value may be affected by market dynamics"
    ],
    "mileage": [
      { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "12.4 - 14.2 kmpl" }
    ],
    "colours": [
      { "name": "Diamond White", "image": "" },
      { "name": "Absolute Black", "image": "" },
      { "name": "Diffused Silver", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "Panoramic Sunroof",
      "Terrain Management System",
      "SYNC 3 Infotainment System with 8-inch Touchscreen",
      "Semi-Auto Parallel Park Assist",
      "Hands-Free Power Liftgate",
      "Seven Airbags",
      "Hill Descent Control"
    ],
    "reviews": []
  },
  "Ford Mustang": {
    "type": "Sports Car",
    "description": "An iconic sports car known for its powerful performance and classic design.",
    "image": "",
    "brief": "The Ford Mustang is a legendary sports car that combines classic design elements with modern performance, offering an exhilarating driving experience.",
    "price": "₹80 Lakh - ₹90 Lakh*",
    "specifications": {
      "Engine": "5.0L V8",
      "Power": "395.6 bhp @ 6500 rpm",
      "Torque": "515 Nm @ 4250 rpm",
      "Seating Capacity": "4",
      "Drive Type": "Rear Wheel Drive",
      "Mileage": "Approximately 7.9 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "6-speed Automatic",
      "Fuel Tank Capacity": "60.9 Litres",
      "Ground Clearance": "137 mm",
      "Length": "4784 mm",
      "Width": "2080 mm",
      "Height": "1391 mm",
      "Wheelbase": "2720 mm"
    },
    "variants": [
      { "name": "GT Fastback 5.0L V8", "price": "₹80 Lakh" },
      { "name": "GT Convertible 5.0L V8", "price": "₹85 Lakh" }
    ],
    "pros": [
      "Iconic and timeless design",
      "Powerful V8 engine delivering robust performance",
      "Advanced infotainment system with Android Auto and Apple CarPlay",
      "Customizable driving modes for a tailored experience",
      "Strong community and aftermarket support"
    ],
    "cons": [
      "High fuel consumption",
      "Limited rear-seat space",
      "High import duties affecting pricing in India",
      "Maintenance and spare parts can be expensive",
      "Large dimensions may pose challenges in urban settings"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "Approximately 7.9 kmpl" }
    ],
    "colours": [
      { "name": "Race Red", "image": "" },
      { "name": "Shadow Black", "image": "" },
      { "name": "Velocity Blue", "image": "" },
      { "name": "Oxford White", "image": "" },
      { "name": "Iconic Silver", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen Infotainment System",
      "12-inch Digital Instrument Cluster",
      "Dual-Zone Automatic Climate Control",
      "Adaptive Cruise Control",
      "Leather Upholstery",
      "Rear Parking Camera with Sensors",
      "Selectable Drive Modes"
    ],
    "reviews": []
  },
  "Renault Kwid": {
    "type": "Hatchback",
    "description": "An entry-level hatchback known for its compact design and fuel efficiency.",
    "image": "",
    "brief": "The Renault Kwid is a budget-friendly hatchback that combines a stylish design with impressive fuel efficiency, making it an ideal choice for city driving.",
    "price": "₹4.70 - ₹6.45 Lakh*",
    "specifications": {
      "Engine": "1.0L SCe Petrol",
      "Power": "67.06 bhp @ 5500 rpm",
      "Torque": "91 Nm @ 4250 rpm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "21.46 - 22.3 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "Manual / AMT",
      "Fuel Tank Capacity": "28 Litres",
      "Ground Clearance": "184 mm",
      "Length": "3731 mm",
      "Width": "1579 mm",
      "Height": "1490 mm",
      "Wheelbase": "2422 mm"
    },
    "variants": [
      { "name": "1.0 RXE", "price": "₹4.70 Lakh" },
      { "name": "1.0 RXL", "price": "₹5.10 Lakh" },
      { "name": "1.0 RXT", "price": "₹5.50 Lakh" },
      { "name": "Climber", "price": "₹5.80 Lakh" },
      { "name": "Climber AMT", "price": "₹6.45 Lakh" }
    ],
    "pros": [
      "Attractive SUV-inspired design",
      "High ground clearance suitable for Indian roads",
      "Fuel-efficient engine",
      "Affordable pricing",
      "Compact dimensions ideal for city driving"
    ],
    "cons": [
      "Limited rear-seat space",
      "Basic interior quality",
      "Limited power for highway driving",
      "Absence of rear power windows in lower variants",
      "Limited after-sales service network in some regions"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "21.46 kmpl" },
      { "fuelType": "Petrol", "transmission": "AMT", "mileage": "22.3 kmpl" }
    ],
    "colours": [
      { "name": "Fiery Red", "image": "" },
      { "name": "Moonlight Silver", "image": "" },
      { "name": "Ice Cool White", "image": "" },
      { "name": "Outback Bronze", "image": "" },
      { "name": "Electric Blue", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen MediaNAV Evolution",
      "Digital Instrument Cluster",
      "Rear Parking Sensors",
      "Front Power Windows",
      "LED Daytime Running Lights",
      "ABS with EBD",
      "Driver Airbag"
    ],
    "reviews": []
  },
  "Renault Triber": {
    "type": "MPV",
    "description": "A versatile 7-seater MPV designed for families seeking space and comfort.",
    "image": "",
    "brief": "The Renault Triber is a compact yet spacious MPV that offers flexible seating arrangements and a host of features, making it an excellent choice for larger families.",
    "price": "₹6.10 - ₹8.98 Lakh*",
    "specifications": {
      "Engine": "1.0L ENERGY Petrol",
      "Power": "71.01 bhp @ 6250 rpm",
      "Torque": "96 Nm @ 3500 rpm",
      "Seating Capacity": "7",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "18.2 - 20 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "5-speed Manual / 5-speed AMT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "182 mm",
      "Length": "3990 mm",
      "Width": "1739 mm",
      "Height": "1643 mm",
      "Wheelbase": "2636 mm"
    },
    "variants": [
      { "name": "RXE", "price": "₹6.10 Lakh" },
      { "name": "RXL", "price": "₹6.75 Lakh" },
      { "name": "RXT", "price": "₹7.50 Lakh" },
      { "name": "RXZ", "price": "₹8.25 Lakh" },
      { "name": "RXZ Dual Tone", "price": "₹8.98 Lakh" }
    ],
    "pros": [
      "Flexible seating with EasyFix seats",
      "Ample boot space when in 5-seater configuration",
      "Affordable pricing for a 7-seater",
      "User-friendly infotainment system",
      "Good ground clearance suitable for varied terrains"
    ],
    "cons": [
      "Engine performance may feel underpowered with full load",
      "No diesel engine option",
      "Limited features in base variants",
      "Plastic quality in interiors could be improved",
      "Third-row seating best suited for children"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.2 kmpl" },
      { "fuelType": "Petrol", "transmission": "AMT", "mileage": "20 kmpl" }
    ],
    "colours": [
      { "name": "Electric Blue", "image": "" },
      { "name": "Fiery Red", "image": "" },
      { "name": "Moonlight Silver", "image": "" },
      { "name": "Ice Cool White", "image": "" },
      { "name": "Metal Mustard", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen MediaNAV Evolution",
      "LED Instrument Cluster",
      "Rear Parking Sensors with Camera",
      "Keyless Entry with Push Start/Stop",
      "Projector Headlamps with LED DRLs",
      "ABS with EBD and Brake Assist",
      "Dual Front Airbags"
    ],
    "reviews": []
  },
  "Renault Kiger": {
    "type": "SUV",
    "description": "A compact SUV that combines style with practicality.",
    "image": "",
    "brief": "The Renault Kiger is a compact SUV that offers a blend of modern design, efficient performance, and practical features, making it suitable for urban commutes and weekend getaways.",
    "price": "₹6.64 - ₹12.48 Lakh*",
    "specifications": {
      "Engine": "1.0L Turbocharged Petrol",
      "Power": "98.63 bhp @ 5000 rpm",
      "Torque": "152 Nm @ 2200-4400 rpm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "18.24 - 20.5 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "5-speed Manual / Automatic",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "205 mm",
      "Length": "3991 mm",
      "Width": "1750 mm",
      "Height": "1605 mm",
      "Wheelbase": "2500 mm"
    },
    "variants": [
      { "name": "RXE", "price": "₹6.64 Lakh" },
      { "name": "RXL", "price": "₹7.25 Lakh" },
      { "name": "RXT", "price": "₹8.15 Lakh" },
      { "name": "RXZ", "price": "₹9.00 Lakh" },
      { "name": "RXZ Turbo CVT DT", "price": "₹12.48 Lakh" }
    ],
    "pros": [
      "Attractive and modern design",
      "High ground clearance suitable for varied terrains",
      "Efficient turbocharged engine options",
      "Spacious boot capacity of 405 litres",
      "Competitive pricing in the compact SUV segment"
    ],
    "cons": [
      "Rear seat space may feel cramped for taller passengers",
      "Interior plastic quality could be improved",
      "Limited rear visibility due to design",
      "No diesel engine option available",
      "Some competitors offer more advanced infotainment systems"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.24 kmpl" },
      { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "20.5 kmpl" }
    ],
    "colours": [
      { "name": "Caspian Blue", "image": "" },
      { "name": "Radiant Red", "image": "" },
      { "name": "Moonlight Silver", "image": "" },
      { "name": "Ice Cool White", "image": "" },
      { "name": "Planet Grey", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
      "LED Headlamps with DRLs",
      "Automatic Climate Control",
      "Push Button Start/Stop",
      "Wireless Smartphone Charger",
      "ABS with EBD and Brake Assist",
      "Four Airbags (Front and Side)"
    ],
    "reviews": []
  },
  
    "Renault Duster": {
      "type": "SUV",
      "description": "A rugged SUV known for its off-road capabilities and robust performance.",
      "image": "",
      "brief": "The Renault Duster is a versatile SUV offering a blend of robust performance and off-road capabilities, making it suitable for both urban commutes and adventurous terrains.",
      "price": "₹10.85 - ₹16.42 Lakh*",
      "specifications": {
        "Engine": "1.3L Turbocharged Petrol",
        "Power": "154 bhp @ 5500 rpm",
        "Torque": "254 Nm @ 1600 rpm",
        "Seating Capacity": "5",
        "Drive Type": "Front Wheel Drive / All Wheel Drive",
        "Mileage": "16.42 kmpl",
        "Fuel Type": "Petrol",
        "Transmission": "5-speed Manual / Automatic",
        "Fuel Tank Capacity": "50 Litres",
        "Ground Clearance": "205 mm",
        "Length": "4360 mm",
        "Width": "1822 mm",
        "Height": "1695 mm",
        "Wheelbase": "2673 mm"
      },
      "variants": [
        { "name": "RXE MT", "price": "₹10.85 Lakh" },
        { "name": "RXS MT", "price": "₹12.00 Lakh" },
        { "name": "RXZ MT", "price": "₹13.50 Lakh" },
        { "name": "RXZ CVT", "price": "₹15.00 Lakh" },
        { "name": "RXZ AWD", "price": "₹16.42 Lakh" }
      ],
      "pros": [
        "Excellent off-road capabilities",
        "Spacious and comfortable interior",
        "Powerful turbocharged engine",
        "High ground clearance suitable for rough terrains",
        "Competitive pricing in the SUV segment"
      ],
      "cons": [
        "Interior design feels dated compared to competitors",
        "Limited features in base variants",
        "No diesel engine option available",
        "Fuel efficiency could be better",
        "Rear AC vents absent in some variants"
      ],
      "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16.42 kmpl" },
        { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16.42 kmpl" }
      ],
      "colours": [
        { "name": "Caspian Blue", "image": "" },
        { "name": "Mahogany Brown", "image": "" },
        { "name": "Moonlight Silver", "image": "" },
        { "name": "Outback Bronze", "image": "" },
        { "name": "Pearl White", "image": "" }
      ],
      "exteriorImages": [],
      "interiorImages": [],
      "topFeatures": [
        "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
        "Projector Headlamps with LED DRLs",
        "Cruise Control",
        "Rear Parking Camera with Sensors",
        "Automatic Climate Control",
        "ABS with EBD and Brake Assist",
        "Dual Front Airbags"
      ],
      "reviews": []
    },
    
        "Renault Captur": {
          "type": "SUV",
          "description": "A premium SUV offering a blend of style, comfort, and performance.",
          "image": "",
          "brief": "The Renault Captur is a premium SUV that combines contemporary design with advanced features, providing a comfortable and dynamic driving experience.",
          "price": "₹9.50 - ₹13.05 Lakh*",
          "specifications": {
            "Engine": "1.5L Petrol / 1.5L Diesel",
            "Power": "106 PS (Petrol) / 110 PS (Diesel)",
            "Torque": "142 Nm (Petrol) / 240 Nm (Diesel)",
            "Seating Capacity": "5",
            "Drive Type": "Front Wheel Drive",
            "Mileage": "13.87 kmpl (Petrol) / 20.37 kmpl (Diesel)",
            "Fuel Type": "Petrol / Diesel",
            "Transmission": "6-speed Manual",
            "Fuel Tank Capacity": "50 Litres",
            "Ground Clearance": "210 mm",
            "Length": "4329 mm",
            "Width": "1813 mm",
            "Height": "1619 mm",
            "Wheelbase": "2673 mm"
          },
          "variants": [
            { "name": "RXE Petrol", "price": "₹9.50 Lakh" },
            { "name": "RXE Diesel", "price": "₹10.51 Lakh" },
            { "name": "Platine Petrol Dual Tone", "price": "₹12.05 Lakh" },
            { "name": "Platine Diesel Dual Tone", "price": "₹13.05 Lakh" }
          ],
          "pros": [
            "Attractive and modern exterior design",
            "High ground clearance suitable for varied terrains",
            "Available in both petrol and diesel engine options",
            "Spacious and comfortable interior",
            "Competitive pricing in the premium SUV segment"
          ],
          "cons": [
            "Limited availability of automatic transmission options",
            "Interior design may feel dated compared to newer competitors",
            "No all-wheel-drive option",
            "Rear visibility could be improved",
            "Some competitors offer more advanced infotainment systems"
          ],
          "mileage": [
            { "fuelType": "Petrol", "transmission": "Manual", "mileage": "13.87 kmpl" },
            { "fuelType": "Diesel", "transmission": "Manual", "mileage": "20.37 kmpl" }
          ],
          "colours": [
            { "name": "Radiant Red/Mystery Black", "image": "" },
            { "name": "Mahogany Brown/Marble Ivory", "image": "" },
            { "name": "Moonlight Silver/Mystery Black", "image": "" },
            { "name": "Pearl White/Mystery Black", "image": "" },
            { "name": "Cayenne Orange/Mystery Black", "image": "" },
            { "name": "Moonlight Silver", "image": "" },
            { "name": "Mahogany Brown", "image": "" },
            { "name": "Pearl White", "image": "" }
          ],
          "exteriorImages": [],
          "interiorImages": [],
          "topFeatures": [
            "7-inch Touchscreen Infotainment System with Apple CarPlay and Android Auto",
            "Projector Headlamps with LED DRLs",
            "Cruise Control",
            "Rear Parking Camera with Sensors",
            "Automatic Climate Control",
            "ABS with EBD and Brake Assist",
            "Dual Front Airbags"
          ],
          "reviews": []
        },
    "Renault Lodgy": {
  "type": "MPV",
  "description": "A spacious MPV designed for large families and commercial use.",
  "image": "",
  "brief": "The Renault Lodgy is a versatile multi-purpose vehicle offering ample space and comfort, making it ideal for large families and commercial applications.",
  "price": "₹8.63 - ₹12.83 Lakh*",
  "specifications": {
    "Engine": "1.5L dCi Diesel",
    "Power": "85 PS / 110 PS",
    "Torque": "200 Nm / 245 Nm",
    "Seating Capacity": "7 / 8",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "19.98 - 21.04 kmpl",
    "Fuel Type": "Diesel",
    "Transmission": "5-speed Manual / 6-speed Manual",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "174 mm",
    "Length": "4498 mm",
    "Width": "1751 mm",
    "Height": "1697 mm",
    "Wheelbase": "2810 mm"
  },
  "variants": [
    { "name": "85 PS STD 8 Seater", "price": "₹8.63 Lakh" },
    { "name": "85 PS RxE 7 Seater", "price": "₹9.64 Lakh" },
    { "name": "85 PS RxE 8 Seater", "price": "₹9.64 Lakh" },
    { "name": "85 PS RxL World Edition 8 Seater", "price": "₹9.88 Lakh" },
    { "name": "Stepway RXL 85PS 8 Seater", "price": "₹10.54 Lakh" },
    { "name": "110 PS RxL World Edition 8 Seater", "price": "₹10.54 Lakh" },
    { "name": "Stepway RXL 110PS 8 Seater", "price": "₹10.78 Lakh" },
    { "name": "Stepway RXZ 85PS 8 Seater", "price": "₹11.30 Lakh" },
    { "name": "Stepway RXZ 110PS 7 Seater", "price": "₹12.12 Lakh" },
    { "name": "Stepway RXZ 110PS 8 Seater", "price": "₹12.12 Lakh" }
  ],
  "pros": [
    "Spacious interior with flexible seating configurations",
    "Fuel-efficient diesel engine options",
    "Competitive pricing in the MPV segment",
    "Comfortable ride quality suitable for long journeys",
    "Adequate boot space even with all seats occupied"
  ],
  "cons": [
    "Lacks automatic transmission options",
    "Interior design is relatively plain compared to competitors",
    "Limited availability of advanced safety features",
    "No petrol engine variant offered",
    "Third-row seating may feel cramped for adults"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "5-speed Manual", "mileage": "21.04 kmpl" },
    { "fuelType": "Diesel", "transmission": "6-speed Manual", "mileage": "19.98 kmpl" }
  ],
  "colours": [
    { "name": "Royal Orchid", "image": "" },
    { "name": "Pearl White", "image": "" },
    { "name": "Moonlight Silver", "image": "" },
    { "name": "Slate Grey", "image": "" },
    { "name": "Fiery Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment System with Navigation",
    "Rear Parking Sensors and Camera",
    "Automatic Climate Control",
    "Steering Mounted Audio and Phone Controls",
    "ABS with EBD and Brake Assist",
    "Dual Front Airbags",
    "Cruise Control with Speed Limiter"
  ],
  "reviews": []
},
"Renault Scala": {
  "type": "Sedan",
  "description": "A stylish sedan offering a comfortable ride and modern features.",
  "image": "",
  "brief": "The Renault Scala is a premium sedan that combines a sleek design with a spacious and feature-rich interior, making it a great choice for urban commuting.",
  "price": "₹7.44 - ₹10.61 Lakh*",
  "specifications": {
    "Engine": "1.5L Petrol / 1.5L dCi Diesel",
    "Power": "99 PS (Petrol) / 86 PS (Diesel)",
    "Torque": "134 Nm (Petrol) / 200 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "16.95 - 21.64 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "5-speed Manual / CVT (Petrol)",
    "Fuel Tank Capacity": "41 Litres",
    "Ground Clearance": "161 mm",
    "Length": "4425 mm",
    "Width": "1695 mm",
    "Height": "1505 mm",
    "Wheelbase": "2600 mm"
  },
  "variants": [
    { "name": "RxE Petrol", "price": "₹7.44 Lakh" },
    { "name": "RxL Petrol", "price": "₹8.38 Lakh" },
    { "name": "RxZ Petrol", "price": "₹9.22 Lakh" },
    { "name": "RxL Diesel", "price": "₹9.56 Lakh" },
    { "name": "RxZ Diesel", "price": "₹10.61 Lakh" }
  ],
  "pros": [
    "Spacious cabin with ample legroom",
    "Fuel-efficient diesel engine",
    "Smooth CVT transmission for petrol variant",
    "Good ride quality and handling",
    "Premium design with chrome accents"
  ],
  "cons": [
    "Interior design feels a bit dated",
    "Limited feature set compared to newer competitors",
    "No touchscreen infotainment system in base variants",
    "Rear headroom may feel restricted for taller passengers",
    "Discontinued in some markets, leading to limited service support"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "16.95 kmpl" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "17.97 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "21.64 kmpl" }
  ],
  "colours": [
    { "name": "Pearl White", "image": "" },
    { "name": "Metallic Silver", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Fire Red", "image": "" },
    { "name": "Cosmos Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Automatic Climate Control",
    "Steering Mounted Controls",
    "ABS with EBD and Brake Assist",
    "Dual Front Airbags",
    "Push Button Start/Stop",
    "Electrically Adjustable ORVMs",
    "Rear Armrest with Cup Holders"
  ],
  "reviews": []
},

"Renault Fluence": {
  "type": "Sedan",
  "description": "A premium sedan known for its elegant design and advanced technology.",
  "image": "",
  "brief": "The Renault Fluence is a stylish and feature-packed sedan that offers a comfortable ride, premium interiors, and advanced safety features.",
  "price": "₹13.99 - ₹15.49 Lakh*",
  "specifications": {
    "Engine": "2.0L Petrol / 1.5L dCi Diesel",
    "Power": "137 PS (Petrol) / 110 PS (Diesel)",
    "Torque": "190 Nm (Petrol) / 240 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "13.99 - 20.4 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "6-speed Manual / CVT (Petrol)",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "170 mm",
    "Length": "4618 mm",
    "Width": "1813 mm",
    "Height": "1488 mm",
    "Wheelbase": "2703 mm"
  },
  "variants": [
    { "name": "E2 Diesel", "price": "₹13.99 Lakh" },
    { "name": "E4 Diesel", "price": "₹15.49 Lakh" }
  ],
  "pros": [
    "Elegant and stylish design",
    "Spacious and comfortable cabin",
    "Fuel-efficient diesel engine",
    "Good ride quality and handling",
    "Loaded with premium features"
  ],
  "cons": [
    "Petrol variant lacks performance compared to rivals",
    "Limited service network in some regions",
    "Lack of latest tech features seen in newer competitors",
    "Resale value is not very strong",
    "No automatic transmission for the diesel variant"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "13.99 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "20.4 kmpl" }
  ],
  "colours": [
    { "name": "Pearl White", "image": "" },
    { "name": "Metallic Black", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Platinum Silver", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Dual-zone Automatic Climate Control",
    "Rear AC Vents",
    "Cruise Control",
    "ABS with EBD and Brake Assist",
    "Dual Front Airbags",
    "Touchscreen Infotainment System",
    "Keyless Entry with Push Button Start"
  ],
  "reviews": []
},

"Renault Pulse": {
  "type": "Hatchback",
  "description": "A compact hatchback offering a blend of performance and efficiency.",
  "image": "",
  "brief": "The Renault Pulse is a practical and fuel-efficient hatchback designed for city driving, offering a peppy engine and comfortable interiors.",
  "price": "₹5.08 - ₹6.95 Lakh*",
  "specifications": {
    "Engine": "1.2L Petrol / 1.5L dCi Diesel",
    "Power": "76 PS (Petrol) / 64 PS (Diesel)",
    "Torque": "104 Nm (Petrol) / 160 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "18 - 23 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "5-speed Manual",
    "Fuel Tank Capacity": "41 Litres",
    "Ground Clearance": "170 mm",
    "Length": "3805 mm",
    "Width": "1665 mm",
    "Height": "1525 mm",
    "Wheelbase": "2450 mm"
  },
  "variants": [
    { "name": "RxL Petrol", "price": "₹5.08 Lakh" },
    { "name": "RxZ Petrol", "price": "₹5.80 Lakh" },
    { "name": "RxL Diesel", "price": "₹6.10 Lakh" },
    { "name": "RxZ Diesel", "price": "₹6.95 Lakh" }
  ],
  "pros": [
    "Good fuel efficiency, especially with the diesel variant",
    "Compact and easy to maneuver in city traffic",
    "Comfortable seating and spacious cabin for its size",
    "Reliable and low-maintenance diesel engine",
    "Decent boot space for a hatchback"
  ],
  "cons": [
    "Lacks modern infotainment features",
    "Interior design feels outdated",
    "Limited availability of service centers in some regions",
    "No automatic transmission option",
    "Resale value is not very strong"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "23 kmpl" }
  ],
  "colours": [
    { "name": "Metallic Silver", "image": "" },
    { "name": "Pearl White", "image": "" },
    { "name": "Cosmos Blue", "image": "" },
    { "name": "Bright Red", "image": "" },
    { "name": "Graphite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Power Steering",
    "Front Dual Airbags",
    "ABS with EBD",
    "Keyless Entry",
    "Integrated Audio System",
    "Electrically Adjustable ORVMs",
    "Rear Defogger"
  ],
  "reviews": []
},
"Renault Koleos": {
  "type": "SUV",
  "description": "A premium SUV offering luxury features and a comfortable ride.",
  "image": "",
  "brief": "The Renault Koleos is a stylish and feature-rich SUV, designed for those who seek a blend of luxury, technology, and performance in their drive.",
  "price": "₹23.99 - ₹28.99 Lakh*",
  "specifications": {
    "Engine": "2.0L dCi Diesel",
    "Power": "173 PS",
    "Torque": "360 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive / All Wheel Drive",
    "Mileage": "14 - 17 kmpl",
    "Fuel Type": "Diesel",
    "Transmission": "6-speed Manual / CVT",
    "Fuel Tank Capacity": "60 Litres",
    "Ground Clearance": "210 mm",
    "Length": "4675 mm",
    "Width": "1843 mm",
    "Height": "1678 mm",
    "Wheelbase": "2705 mm"
  },
  "variants": [
    { "name": "2WD MT", "price": "₹23.99 Lakh" },
    { "name": "2WD CVT", "price": "₹25.99 Lakh" },
    { "name": "4WD AT", "price": "₹28.99 Lakh" }
  ],
  "pros": [
    "Premium and spacious cabin with high-quality materials",
    "Smooth and refined diesel engine",
    "Comfortable ride quality and handling",
    "Advanced safety features",
    "Good ground clearance for off-road capability"
  ],
  "cons": [
    "Limited brand presence in some markets",
    "No petrol engine option available",
    "Infotainment system could be more modern",
    "Rear seat space is slightly less compared to rivals",
    "High maintenance costs"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "17 kmpl" },
    { "fuelType": "Diesel", "transmission": "CVT", "mileage": "14 kmpl" }
  ],
  "colours": [
    { "name": "Ultra Silver", "image": "" },
    { "name": "Metallic Black", "image": "" },
    { "name": "Meissen Blue", "image": "" },
    { "name": "Mineral Beige", "image": "" },
    { "name": "Pearl White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "8.7-inch Touchscreen Infotainment System",
    "Panoramic Sunroof",
    "Bose Premium Audio System",
    "Hands-free Power Tailgate",
    "Dual-zone Automatic Climate Control",
    "Adaptive Cruise Control",
    "Electronic Stability Control with Hill Start Assist"
  ],
  "reviews": []
},
"Renault Megane": {
  "type": "Hatchback",
  "description": "A stylish hatchback known for its performance and design.",
  "image": "",
  "brief": "The Renault Megane is a dynamic hatchback that combines modern design with engaging performance, offering a comfortable and tech-savvy driving experience.",
  "price": "₹24.25 Lakh*",
  "specifications": {
    "Engine": "2.0L Petrol",
    "Power": "143 PS",
    "Torque": "195 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "13 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "6-speed Manual",
    "Fuel Tank Capacity": "60 Litres",
    "Ground Clearance": "145 mm",
    "Length": "4295 mm",
    "Width": "1808 mm",
    "Height": "1471 mm",
    "Wheelbase": "2640 mm"
  },
  "variants": [
    { "name": "2.0 MT Petrol", "price": "₹24.25 Lakh" }
  ],
  "pros": [
    "Attractive and modern exterior design",
    "Comfortable and well-equipped interior",
    "Responsive handling and ride quality",
    "Comprehensive safety features",
    "Good build quality and reliability"
  ],
  "cons": [
    "Limited rear seat space compared to competitors",
    "Fuel efficiency could be better",
    "Higher maintenance costs",
    "Limited availability of service centers in some regions",
    "Resale value may not be as strong as rivals"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "13 kmpl" }
  ],
  "colours": [
    { "name": "Diamond Black", "image": "" },
    { "name": "Arctic White", "image": "" },
    { "name": "Flame Red", "image": "" },
    { "name": "Mercury Silver", "image": "" },
    { "name": "Iron Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment System",
    "Dual-zone Automatic Climate Control",
    "Cruise Control with Speed Limiter",
    "Rear Parking Sensors and Camera",
    "Keyless Entry and Start",
    "LED Daytime Running Lights",
    "Multiple Airbags and ABS with EBD"
  ],
  "reviews": []
},
"Renault Scenic": {
  "type": "MPV",
  "description": "A versatile MPV offering space and comfort for families.",
  "image": "",
  "brief": "The Renault Scenic is a family-oriented Multi-Purpose Vehicle (MPV) designed to provide ample space, comfort, and practicality for both city and highway journeys.",
  "price": "₹8.00 Lakh*",
  "specifications": {
    "Engine": "1.3L TCe Petrol",
    "Power": "140 PS",
    "Torque": "240 Nm",
    "Seating Capacity": "7",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "14 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "6-speed Manual",
    "Fuel Tank Capacity": "60 Litres",
    "Ground Clearance": "170 mm",
    "Length": "4573 mm",
    "Width": "1845 mm",
    "Height": "1645 mm",
    "Wheelbase": "2734 mm"
  },
  "variants": [
    { "name": "1.3L TCe 140 MT", "price": "₹8.00 Lakh" }
  ],
  "pros": [
    "Spacious interior with flexible seating arrangements",
    "Comfortable ride quality suitable for long journeys",
    "Modern design with attractive aesthetics",
    "Comprehensive safety features",
    "Ample boot space for luggage"
  ],
  "cons": [
    "Limited engine options",
    "Fuel efficiency could be improved",
    "Availability of service centers may be limited in some regions",
    "Resale value might not be as high as competitors",
    "Infotainment system may lack some advanced features"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "14 kmpl" }
  ],
  "colours": [
    { "name": "Diamond Black", "image": "" },
    { "name": "Arctic White", "image": "" },
    { "name": "Flame Red", "image": "" },
    { "name": "Mercury Silver", "image": "" },
    { "name": "Iron Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment System",
    "Dual-zone Automatic Climate Control",
    "Cruise Control with Speed Limiter",
    "Rear Parking Sensors and Camera",
    "Keyless Entry and Start",
    "LED Daytime Running Lights",
    "Multiple Airbags and ABS with EBD"
  ],
  "reviews": []
},

  "Nissan Magnite": {
    "type": "Compact SUV",
    "description": "A compact SUV offering a blend of style, performance, and affordability, designed specifically for the Indian market.",
    "image": "",
    "brief": "The Nissan Magnite is a feature-rich compact SUV tailored for urban environments, combining modern aesthetics with efficient performance and advanced technology.",
    "price": "₹6.12 - ₹11.72 Lakh*",
    "specifications": {
      "Engine": "1.0L B4D Petrol / 1.0L HRA0 Turbo Petrol",
      "Power": "71 bhp @ 6250 rpm / 99 bhp @ 5000 rpm",
      "Torque": "96 Nm @ 3500 rpm / 152 Nm @ 2200-4400 rpm",
      "Seating Capacity": "5",
      "Drive Type": "Front Wheel Drive",
      "Mileage": "17.9 - 19.9 kmpl",
      "Fuel Type": "Petrol",
      "Transmission": "5-speed Manual / CVT",
      "Fuel Tank Capacity": "40 Litres",
      "Ground Clearance": "205 mm",
      "Length": "3994 mm",
      "Width": "1758 mm",
      "Height": "1572 mm",
      "Wheelbase": "2500 mm"
    },
    "variants": [
      { "name": "XE", "price": "₹6.12 Lakh" },
      { "name": "XL", "price": "₹6.99 Lakh" },
      { "name": "XV", "price": "₹7.68 Lakh" },
      { "name": "XV Premium", "price": "₹8.85 Lakh" },
      { "name": "XV Premium (O)", "price": "₹9.75 Lakh" },
      { "name": "Turbo XL", "price": "₹7.88 Lakh" },
      { "name": "Turbo XV", "price": "₹8.58 Lakh" },
      { "name": "Turbo XV Premium", "price": "₹9.75 Lakh" },
      { "name": "Turbo XV Premium (O)", "price": "₹10.65 Lakh" },
      { "name": "Turbo CVT XL", "price": "₹8.58 Lakh" },
      { "name": "Turbo CVT XV", "price": "₹9.28 Lakh" },
      { "name": "Turbo CVT XV Premium", "price": "₹10.45 Lakh" },
      { "name": "Turbo CVT XV Premium (O)", "price": "₹11.35 Lakh" }
    ],
    "pros": [
      "Attractive pricing in the compact SUV segment",
      "Spacious cabin with ample legroom and headroom",
      "High ground clearance suitable for Indian roads",
      "Comprehensive safety features across variants",
      "Fuel-efficient engine options"
    ],
    "cons": [
      "Limited boot space compared to some competitors",
      "Interior plastic quality could be improved",
      "No diesel engine option available",
      "CVT variants are priced higher",
      "Limited availability of service centers in some regions"
    ],
    "mileage": [
      { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.75 kmpl" },
      { "fuelType": "Petrol", "transmission": "CVT", "mileage": "17.7 kmpl" },
      { "fuelType": "Turbo Petrol", "transmission": "Manual", "mileage": "20 kmpl" },
      { "fuelType": "Turbo Petrol", "transmission": "CVT", "mileage": "17.7 kmpl" }
    ],
    "colours": [
      { "name": "Blade Silver", "image": "" },
      { "name": "Sandstone Brown", "image": "" },
      { "name": "Onyx Black", "image": "" },
      { "name": "Storm White", "image": "" },
      { "name": "Vivid Blue", "image": "" },
      { "name": "Flare Garnet Red", "image": "" }
    ],
    "exteriorImages": [],
    "interiorImages": [],
    "topFeatures": [
      "8-inch Touchscreen Infotainment System with Wireless Apple CarPlay and Android Auto",
      "7-inch TFT Digital Instrument Cluster",
      "Automatic Climate Control",
      "LED Bi-Projector Headlamps with LED DRLs",
      "360-degree Around View Monitor",
      "Push Button Start/Stop",
      "Vehicle Dynamic Control (VDC)"
    ],
    "reviews": []
  },
  
    "Nissan Kicks": {
      "type": "SUV",
      "description": "A stylish SUV featuring a bold design, advanced technology, and a comfortable interior, suitable for urban and off-road adventures.",
      "image": "",
      "brief": "The Nissan Kicks is a dynamic SUV that combines contemporary design with cutting-edge features, offering a comfortable and versatile driving experience for both city commutes and off-road escapades.",
      "price": "₹9.50 - ₹14.88 Lakh*",
      "specifications": {
        "Engine": "1.3L Turbo Petrol / 1.5L Petrol",
        "Power": "153.87 bhp @ 5500 rpm / 104.55 bhp @ 5600 rpm",
        "Torque": "254 Nm @ 1600 rpm / 142 Nm @ 4000 rpm",
        "Seating Capacity": "5",
        "Drive Type": "Front Wheel Drive",
        "Mileage": "14.23 - 20.45 kmpl",
        "Fuel Type": "Petrol",
        "Transmission": "6-speed Manual / CVT",
        "Fuel Tank Capacity": "50 Litres",
        "Ground Clearance": "210 mm",
        "Length": "4384 mm",
        "Width": "1813 mm",
        "Height": "1669 mm",
        "Wheelbase": "2673 mm"
      },
      "variants": [
        { "name": "1.5 XL", "price": "₹9.50 Lakh" },
        { "name": "1.5 XV", "price": "₹10.00 Lakh" },
        { "name": "1.3 Turbo XV", "price": "₹12.10 Lakh" },
        { "name": "1.3 Turbo XV Premium", "price": "₹13.00 Lakh" },
        { "name": "1.3 Turbo XV CVT", "price": "₹13.95 Lakh" },
        { "name": "1.3 Turbo XV Premium Optional", "price": "₹14.00 Lakh" },
        { "name": "1.3 Turbo XV Premium Optional Dual Tone", "price": "₹14.20 Lakh" },
        { "name": "1.3 Turbo XV Premium CVT", "price": "₹14.65 Lakh" }
      ],
      "pros": [
        "Powerful turbocharged engine option",
        "High ground clearance suitable for varied terrains",
        "Spacious and comfortable cabin",
        "Advanced safety features",
        "Competitive pricing in the SUV segment"
      ],
      "cons": [
        "Limited service network in some regions",
        "No diesel engine option available",
        "Infotainment system could be more intuitive",
        "Rear visibility slightly compromised due to design",
        "Resale value might be lower compared to some competitors"
      ],
      "mileage": [
        { "fuelType": "Petrol", "transmission": "Manual", "mileage": "14.23 kmpl" },
        { "fuelType": "Petrol", "transmission": "CVT", "mileage": "15.8 kmpl" },
        { "fuelType": "Turbo Petrol", "transmission": "Manual", "mileage": "20.45 kmpl" },
        { "fuelType": "Turbo Petrol", "transmission": "CVT", "mileage": "15.8 kmpl" }
      ],
      "colours": [
        { "name": "Pearl White", "image": "" },
        { "name": "Blade Silver", "image": "" },
        { "name": "Bronze Grey", "image": "" },
        { "name": "Amber Orange", "image": "" },
        { "name": "Deep Blue Pearl", "image": "" },
        { "name": "Night Shade", "image": "" },
        { "name": "Fire Red", "image": "" },
        { "name": "Pearl White/Onyx Black", "image": "" },
        { "name": "Bronze Grey/Amber Orange", "image": "" },
        { "name": "Fire Red/Onyx Black", "image": "" },
        { "name": "Pearl White/Amber Orange", "image": "" }
      ],
      "exteriorImages": [],
      "interiorImages": [],
      "topFeatures": [
        "8-inch Touchscreen Infotainment System",
        "360-degree Around View Monitor",
        "Automatic Climate Control",
        "LED Projector Headlamps",
        "Cruise Control",
        "Push Button Start/Stop",
        "Vehicle Stability Control"
      ],
      "reviews": []
    },
    
        "Nissan X-Trail": {
          "type": "SUV",
          "description": "A premium SUV offering advanced features, a spacious cabin, and robust performance, ideal for long drives and family outings.",
          "image": "",
          "brief": "The Nissan X-Trail is a versatile SUV that combines modern design with cutting-edge technology, providing a comfortable and powerful driving experience suitable for both urban commutes and adventurous getaways.",
          "price": "₹49.92 Lakh*",
          "specifications": {
            "Engine": "1.5L Turbo-Petrol with Mild-Hybrid",
            "Power": "163 hp",
            "Torque": "300 Nm",
            "Seating Capacity": "7",
            "Drive Type": "Front Wheel Drive",
            "Mileage": "13.7 kmpl",
            "Fuel Type": "Petrol",
            "Transmission": "CVT Automatic",
            "Fuel Tank Capacity": "55 Litres",
            "Ground Clearance": "210 mm",
            "Length": "4680 mm",
            "Width": "1840 mm",
            "Height": "1725 mm",
            "Wheelbase": "2705 mm"
          },
          "variants": [
            { "name": "1.5 Turbo-Petrol CVT", "price": "₹49.92 Lakh" }
          ],
          "pros": [
            "Spacious 7-seater configuration",
            "Advanced mild-hybrid technology",
            "High ground clearance suitable for varied terrains",
            "Comprehensive safety features",
            "Modern infotainment system with connectivity options"
          ],
          "cons": [
            "Limited to a single variant",
            "No diesel engine option available",
            "Front Wheel Drive only; no All-Wheel Drive option",
            "Premium pricing compared to some competitors",
            "Availability limited due to CBU import"
          ],
          "mileage": [
            { "fuelType": "Petrol", "transmission": "CVT Automatic", "mileage": "13.7 kmpl" }
          ],
          "colours": [
            { "name": "Solid White", "image": "" },
            { "name": "Diamond Black", "image": "" },
            { "name": "Champagne Silver", "image": "" }
          ],
          "exteriorImages": [],
          "interiorImages": [],
          "topFeatures": [
            "12.3-inch Digital Driver’s Display",
            "8-inch Touchscreen Infotainment System with Wireless Android Auto and Apple CarPlay",
            "Panoramic Sunroof",
            "Wireless Phone Charger",
            "Dual-Zone Climate Control",
            "Sliding and Reclining Second-Row Seats",
            "Comprehensive Safety Suite with Multiple Airbags"
          ],
          "reviews": []
        },
    "Nissan GT-R": {
  "type": "Sports Car",
  "description": "A high-performance sports car known for its powerful engine, exceptional handling, and iconic design.",
  "image": "",
  "brief": "The Nissan GT-R is a legendary sports car that combines cutting-edge technology with exhilarating performance, offering driving enthusiasts an unmatched experience on both road and track.",
  "price": "₹2.12 Crore*",
  "specifications": {
    "Engine": "3.8L V6 Twin-Turbocharged Petrol",
    "Power": "565 bhp",
    "Torque": "467 lb-ft",
    "Seating Capacity": "4",
    "Drive Type": "All-Wheel Drive",
    "Mileage": "8.4 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "6-speed Dual-Clutch Automatic",
    "Fuel Tank Capacity": "74 Litres",
    "Ground Clearance": "110 mm",
    "Length": "4710 mm",
    "Width": "1895 mm",
    "Height": "1370 mm",
    "Wheelbase": "2780 mm"
  },
  "variants": [
    { "name": "Premium", "price": "₹2.12 Crore" }
  ],
  "pros": [
    "Exceptional acceleration and top speed",
    "Advanced all-wheel-drive system for superior handling",
    "High-quality interior with modern amenities",
    "Iconic and aggressive exterior design",
    "Proven track performance and reliability"
  ],
  "cons": [
    "High purchase price and maintenance costs",
    "Limited rear-seat space",
    "Fuel efficiency is low due to performance-oriented engine",
    "Infotainment system could be more advanced",
    "Stiff ride quality may not suit all drivers"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8.4 kmpl" }
  ],
  "colours": [
    { "name": "Katsura Orange", "image": "" },
    { "name": "Pearl Black", "image": "" },
    { "name": "Ultimate Silver", "image": "" },
    { "name": "Vibrant Red", "image": "" },
    { "name": "Storm White", "image": "" },
    { "name": "Gun Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "8-inch Touchscreen Infotainment System",
    "Bose® Audio System with 11 Speakers",
    "Dual-Zone Automatic Climate Control",
    "Recaro® Leather-Appointed Seats",
    "NissanConnect with Navigation",
    "Multi-Function Display System",
    "Advanced Airbag System"
  ],
  "reviews": []
},
"Nissan Sunny": {
  "type": "Sedan",
  "description": "A spacious sedan offering a comfortable ride, modern features, and a reliable engine, suitable for both city and highway driving.",
  "image": "",
  "brief": "The Nissan Sunny is a practical and spacious sedan that combines comfort, fuel efficiency, and affordability, making it an excellent choice for daily commuting and long drives.",
  "price": "₹7.07 - ₹10.89 Lakh*",
  "specifications": {
    "Engine": "1.5L Petrol",
    "Power": "99 bhp",
    "Torque": "134 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "17.5 - 19.5 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "5-speed Manual / CVT",
    "Fuel Tank Capacity": "41 Litres",
    "Ground Clearance": "161 mm",
    "Length": "4455 mm",
    "Width": "1695 mm",
    "Height": "1515 mm",
    "Wheelbase": "2600 mm"
  },
  "variants": [
    { "name": "XE Petrol", "price": "₹7.07 Lakh" },
    { "name": "XL Petrol", "price": "₹8.04 Lakh" },
    { "name": "XV Petrol", "price": "₹9.23 Lakh" },
    { "name": "XV CVT Petrol", "price": "₹10.89 Lakh" }
  ],
  "pros": [
    "Spacious and comfortable cabin",
    "Fuel-efficient engine",
    "Large boot space of 490 liters",
    "Reliable and low maintenance",
    "Smooth CVT automatic option"
  ],
  "cons": [
    "Aging design compared to competitors",
    "Lacks modern infotainment features",
    "No diesel engine option available",
    "Basic safety features in lower variants",
    "Soft suspension may lead to body roll at high speeds"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "17.5 kmpl" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "19.5 kmpl" }
  ],
  "colours": [
    { "name": "Nightshade", "image": "" },
    { "name": "Blade Silver", "image": "" },
    { "name": "Pearl White", "image": "" },
    { "name": "Deep Grey", "image": "" },
    { "name": "Onyx Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment System",
    "Rear Parking Sensors and Camera",
    "Keyless Entry with Push Start Button",
    "Automatic Climate Control",
    "Steering-Mounted Audio Controls",
    "Adjustable Driver Seat",
    "ABS with EBD and Dual Airbags"
  ],
  "reviews": []
},
"Nissan Micra": {
  "type": "Hatchback",
  "description": "A compact hatchback known for its stylish design, efficient engine, and compact size, ideal for city commuting.",
  "image": "",
  "brief": "The Nissan Micra is a practical and stylish hatchback, offering a fuel-efficient engine, modern features, and a compact design, making it perfect for urban driving.",
  "price": "₹6.62 - ₹8.12 Lakh*",
  "specifications": {
    "Engine": "1.2L Petrol / 1.5L Diesel",
    "Power": "76 bhp (Petrol) / 64 bhp (Diesel)",
    "Torque": "104 Nm (Petrol) / 160 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "19.0 - 23.1 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "5-speed Manual / CVT",
    "Fuel Tank Capacity": "41 Litres",
    "Ground Clearance": "154 mm",
    "Length": "3825 mm",
    "Width": "1665 mm",
    "Height": "1530 mm",
    "Wheelbase": "2450 mm"
  },
  "variants": [
    { "name": "XL CVT Petrol", "price": "₹6.62 Lakh" },
    { "name": "XV CVT Petrol", "price": "₹7.42 Lakh" },
    { "name": "XL Diesel", "price": "₹7.48 Lakh" },
    { "name": "XV Diesel", "price": "₹8.12 Lakh" }
  ],
  "pros": [
    "Compact and easy to maneuver in city traffic",
    "Fuel-efficient engine options",
    "Smooth CVT automatic transmission",
    "Comfortable cabin with decent space",
    "Low maintenance costs"
  ],
  "cons": [
    "Lacks premium features compared to rivals",
    "Interior quality could be improved",
    "No turbocharged engine option",
    "Rear seat space is slightly cramped",
    "Limited aftermarket customization options"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "19.0 kmpl" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "19.2 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "23.1 kmpl" }
  ],
  "colours": [
    { "name": "Sunshine Orange", "image": "" },
    { "name": "Brick Red", "image": "" },
    { "name": "Onyx Black", "image": "" },
    { "name": "Storm White", "image": "" },
    { "name": "Turquoise Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment System",
    "Rear Parking Sensors and Camera",
    "Keyless Entry with Push Start Button",
    "Automatic Climate Control",
    "Steering-Mounted Audio Controls",
    "ABS with EBD and Dual Airbags",
    "Electrically Adjustable ORVMs"
  ],
  "reviews": []
},
"Nissan Micra Active": {
  "type": "Hatchback",
  "description": "An entry-level hatchback offering a blend of performance and efficiency, designed for urban driving.",
  "image": "",
  "brief": "The Nissan Micra Active is a budget-friendly hatchback that combines compact dimensions with practical features, making it ideal for city commuters seeking reliability and ease of driving.",
  "price": "₹5.25 - ₹6.00 Lakh*",
  "specifications": {
    "Engine": "1.2L Petrol",
    "Power": "67 bhp @ 5000 rpm",
    "Torque": "104 Nm @ 4000 rpm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "18.97 - 19.69 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "5-speed Manual",
    "Fuel Tank Capacity": "41 Litres",
    "Ground Clearance": "154 mm",
    "Length": "3801 mm",
    "Width": "1665 mm",
    "Height": "1530 mm",
    "Wheelbase": "2450 mm"
  },
  "variants": [
    { "name": "XL", "price": "₹5.25 Lakh" },
    { "name": "XV", "price": "₹5.75 Lakh" },
    { "name": "XV Safety", "price": "₹6.00 Lakh" }
  ],
  "pros": [
    "Affordable pricing",
    "Compact size suitable for city driving",
    "Fuel-efficient engine",
    "Decent boot space of 251 liters",
    "Low maintenance costs"
  ],
  "cons": [
    "Limited features compared to competitors",
    "No automatic transmission option",
    "Interior design feels dated",
    "Rear seat space is limited",
    "Lacks advanced safety features"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.97 kmpl" },
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "19.69 kmpl" }
  ],
  "colours": [
    { "name": "Turquoise Blue", "image": "" },
    { "name": "Blade Silver", "image": "" },
    { "name": "Storm White", "image": "" },
    { "name": "Onyx Black", "image": "" },
    { "name": "Brick Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Manual Air Conditioning",
    "Power Steering",
    "Front Power Windows",
    "Central Locking",
    "Driver Airbag",
    "Tilt Steering",
    "Smoked Headlamps"
  ],
  "reviews": []
},
"Nissan Terrano": {
  "type": "SUV",
  "description": "A rugged SUV offering a powerful engine, high ground clearance, and a spacious interior, suitable for off-road adventures.",
  "image": "",
  "brief": "The Nissan Terrano is a robust SUV designed for both urban and off-road use, featuring a muscular design, high ground clearance, and a reliable diesel engine for enhanced performance.",
  "price": "₹10.00 - ₹14.65 Lakh*",
  "specifications": {
    "Engine": "1.5L dCi Diesel / 1.6L Petrol",
    "Power": "110 PS (Diesel) / 104 PS (Petrol)",
    "Torque": "248 Nm (Diesel) / 148 Nm (Petrol)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "19.87 - 23.0 kmpl (Diesel), 13.2 kmpl (Petrol)",
    "Fuel Type": "Diesel / Petrol",
    "Transmission": "6-speed Manual / AMT (Diesel), 5-speed Manual (Petrol)",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "205 mm",
    "Length": "4331 mm",
    "Width": "1822 mm",
    "Height": "1671 mm",
    "Wheelbase": "2673 mm"
  },
  "variants": [
    { "name": "XL Petrol", "price": "₹10.00 Lakh" },
    { "name": "XE Diesel", "price": "₹10.95 Lakh" },
    { "name": "XL Diesel", "price": "₹12.00 Lakh" },
    { "name": "XV Diesel", "price": "₹13.85 Lakh" },
    { "name": "XV Premium AMT Diesel", "price": "₹14.65 Lakh" }
  ],
  "pros": [
    "Powerful and efficient diesel engine",
    "High ground clearance suitable for rough terrains",
    "Spacious and comfortable cabin",
    "Reliable suspension for a smooth ride",
    "Good build quality and road presence"
  ],
  "cons": [
    "Lacks modern features compared to rivals",
    "No all-wheel-drive (AWD) option",
    "Interior design feels slightly outdated",
    "Petrol variant lacks performance compared to diesel",
    "Limited service network after Nissan's market shift"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "19.87 kmpl" },
    { "fuelType": "Diesel", "transmission": "AMT", "mileage": "23.0 kmpl" },
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "13.2 kmpl" }
  ],
  "colours": [
    { "name": "Bronze Grey", "image": "" },
    { "name": "Pearl White", "image": "" },
    { "name": "Fire Red", "image": "" },
    { "name": "Moonlight Silver", "image": "" },
    { "name": "Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Touchscreen Infotainment System",
    "Steering Mounted Controls",
    "Dual Airbags & ABS with EBD",
    "Cruise Control",
    "Rear Parking Sensors with Camera",
    "Projector Headlamps",
    "17-inch Alloy Wheels"
  ],
  "reviews": []
},
"Skoda Slavia": {
  "type": "Sedan",
  "description": "A premium sedan that combines elegance with advanced technology.",
  "image": "",
  "brief": "The Skoda Slavia is a stylish and feature-packed sedan, offering a spacious cabin, powerful engine options, and cutting-edge technology for a premium driving experience.",
  "price": "₹11.39 - ₹18.68 Lakh*",
  "specifications": {
    "Engine": "1.0L TSI Petrol / 1.5L TSI Petrol",
    "Power": "115 PS (1.0L) / 150 PS (1.5L)",
    "Torque": "178 Nm (1.0L) / 250 Nm (1.5L)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "18.07 - 19.47 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "6-speed Manual / 6-speed AT / 7-speed DSG",
    "Fuel Tank Capacity": "45 Litres",
    "Ground Clearance": "179 mm",
    "Length": "4541 mm",
    "Width": "1752 mm",
    "Height": "1507 mm",
    "Wheelbase": "2651 mm"
  },
  "variants": [
    { "name": "Active 1.0 TSI MT", "price": "₹11.39 Lakh" },
    { "name": "Ambition 1.0 TSI MT", "price": "₹12.99 Lakh" },
    { "name": "Ambition 1.0 TSI AT", "price": "₹14.29 Lakh" },
    { "name": "Style 1.0 TSI MT", "price": "₹14.94 Lakh" },
    { "name": "Style 1.5 TSI MT", "price": "₹16.79 Lakh" },
    { "name": "Style 1.5 TSI DSG", "price": "₹18.68 Lakh" }
  ],
  "pros": [
    "Premium and spacious interior",
    "Powerful and fuel-efficient TSI engines",
    "Solid build quality and safety features",
    "Large 521-litre boot space",
    "Good ground clearance for a sedan"
  ],
  "cons": [
    "No diesel engine option",
    "Some features reserved for top-end trims",
    "Slightly expensive compared to rivals",
    "Rear seat space could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "19.47 kmpl" },
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "18.07 kmpl" }
  ],
  "colours": [
    { "name": "Candy White", "image": "" },
    { "name": "Carbon Steel", "image": "" },
    { "name": "Tornado Red", "image": "" },
    { "name": "Crystal Blue", "image": "" },
    { "name": "Brilliant Silver", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10-inch Touchscreen Infotainment System",
    "Wireless Android Auto & Apple CarPlay",
    "Digital Cockpit Instrument Cluster",
    "Ventilated Front Seats",
    "Six Airbags & ESC",
    "LED Headlamps with DRLs",
    "Sunroof"
  ],
  "reviews": []
},
"Skoda Superb": {
  "type": "Sedan",
  "description": "A luxury sedan offering a blend of performance and comfort.",
  "image": "",
  "brief": "The Skoda Superb is a premium sedan that delivers outstanding comfort, powerful performance, and a host of advanced features, making it a top choice for executive buyers.",
  "price": "₹34.19 - ₹37.29 Lakh*",
  "specifications": {
    "Engine": "2.0L TSI Petrol",
    "Power": "190 PS",
    "Torque": "320 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "15.1 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "7-speed DSG Automatic",
    "Fuel Tank Capacity": "66 Litres",
    "Ground Clearance": "156 mm",
    "Length": "4869 mm",
    "Width": "1864 mm",
    "Height": "1469 mm",
    "Wheelbase": "2841 mm"
  },
  "variants": [
    { "name": "Sportline 2.0 TSI DSG", "price": "₹34.19 Lakh" },
    { "name": "L&K 2.0 TSI DSG", "price": "₹37.29 Lakh" }
  ],
  "pros": [
    "Spacious and luxurious cabin",
    "Powerful and smooth 2.0L TSI engine",
    "High-quality interior materials",
    "Loaded with premium features",
    "Impressive ride comfort"
  ],
  "cons": [
    "No diesel engine option",
    "Expensive compared to some rivals",
    "Limited rear headroom due to sloping roofline",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "15.1 kmpl" }
  ],
  "colours": [
    { "name": "Moon White", "image": "" },
    { "name": "Magic Black", "image": "" },
    { "name": "Race Blue", "image": "" },
    { "name": "Graphite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "12-speaker Canton Sound System",
    "Virtual Cockpit Digital Instrument Cluster",
    "Three-zone Climate Control",
    "Ventilated Front Seats",
    "Adaptive LED Headlamps",
    "Panoramic Sunroof",
    "Hands-free Parking Assist"
  ],
  "reviews": []
},
"Skoda Kushaq": {
  "type": "SUV",
  "description": "A compact SUV designed for urban adventures.",
  "image": "",
  "brief": "The Skoda Kushaq is a stylish and feature-packed compact SUV, offering a refined driving experience, powerful engine options, and advanced safety features.",
  "price": "₹11.89 - ₹20.49 Lakh*",
  "specifications": {
    "Engine": "1.0L TSI / 1.5L TSI Petrol",
    "Power": "115 PS (1.0L) / 150 PS (1.5L)",
    "Torque": "178 Nm (1.0L) / 250 Nm (1.5L)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "17.2 - 19.8 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "6-speed Manual / 6-speed Automatic / 7-speed DSG",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "188 mm",
    "Length": "4225 mm",
    "Width": "1760 mm",
    "Height": "1612 mm",
    "Wheelbase": "2651 mm"
  },
  "variants": [
    { "name": "Active 1.0 TSI MT", "price": "₹11.89 Lakh" },
    { "name": "Ambition 1.0 TSI MT", "price": "₹13.49 Lakh" },
    { "name": "Style 1.0 TSI MT", "price": "₹15.99 Lakh" },
    { "name": "Style 1.5 TSI DSG", "price": "₹19.69 Lakh" },
    { "name": "Monte Carlo 1.5 TSI DSG", "price": "₹20.49 Lakh" }
  ],
  "pros": [
    "Strong road presence with modern design",
    "Powerful turbo-petrol engine options",
    "Spacious and well-designed interior",
    "Top-class safety features",
    "Good fuel efficiency"
  ],
  "cons": [
    "No diesel engine option",
    "Some rivals offer more features",
    "Limited boot space compared to competitors"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "17.2 kmpl" },
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "18.6 kmpl" },
    { "fuelType": "Petrol", "transmission": "DSG", "mileage": "19.8 kmpl" }
  ],
  "colours": [
    { "name": "Candy White", "image": "" },
    { "name": "Carbon Steel", "image": "" },
    { "name": "Brilliant Silver", "image": "" },
    { "name": "Tornado Red", "image": "" },
    { "name": "Honey Orange", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10-inch Touchscreen Infotainment System",
    "Wireless Android Auto & Apple CarPlay",
    "Ventilated Front Seats",
    "Six Airbags for Enhanced Safety",
    "Electronic Stability Control",
    "Sunroof",
    "Rear Parking Camera with Sensors"
  ],
  "reviews": []
},
"Skoda Kodiaq": {
  "type": "SUV",
  "description": "A premium SUV offering a blend of performance and luxury.",
  "image": "",
  "brief": "The Skoda Kodiaq is a spacious and feature-rich SUV, designed for families who seek luxury, safety, and powerful performance.",
  "price": "₹38.50 - ₹41.99 Lakh*",
  "specifications": {
    "Engine": "2.0L TSI Petrol",
    "Power": "190 PS",
    "Torque": "320 Nm",
    "Seating Capacity": "7",
    "Drive Type": "All Wheel Drive",
    "Mileage": "13 - 14.2 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "7-speed DSG Automatic",
    "Fuel Tank Capacity": "58 Litres",
    "Ground Clearance": "192 mm",
    "Length": "4699 mm",
    "Width": "1882 mm",
    "Height": "1685 mm",
    "Wheelbase": "2791 mm"
  },
  "variants": [
    { "name": "Style 2.0 TSI", "price": "₹38.50 Lakh" },
    { "name": "Sportline 2.0 TSI", "price": "₹39.99 Lakh" },
    { "name": "L&K 2.0 TSI", "price": "₹41.99 Lakh" }
  ],
  "pros": [
    "Premium and spacious cabin",
    "Powerful and refined petrol engine",
    "Advanced safety features",
    "7-seater practicality",
    "High-quality interiors with luxurious touches"
  ],
  "cons": [
    "No diesel engine option",
    "Expensive compared to some rivals",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "13 - 14.2 kmpl" }
  ],
  "colours": [
    { "name": "Moon White", "image": "" },
    { "name": "Lava Blue", "image": "" },
    { "name": "Magic Black", "image": "" },
    { "name": "Graphite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Virtual Cockpit Digital Instrument Cluster",
    "12-Speaker Canton Sound System",
    "Three-Zone Climate Control",
    "Panoramic Sunroof",
    "Ventilated and Heated Front Seats",
    "Adaptive LED Headlamps",
    "Hands-Free Electric Tailgate"
  ],
  "reviews": []
},
"Skoda Octavia": {
  "type": "Sedan",
  "description": "A sophisticated sedan known for its dynamic performance and spacious interior.",
  "image": "",
  "brief": "The Skoda Octavia is a stylish and premium sedan offering a powerful engine, spacious cabin, and advanced technology, making it a great choice for enthusiasts and families alike.",
  "price": "₹27.35 - ₹30.45 Lakh*",
  "specifications": {
    "Engine": "2.0L TSI Petrol",
    "Power": "190 PS",
    "Torque": "320 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "15.8 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "7-speed DSG Automatic",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "137 mm",
    "Length": "4689 mm",
    "Width": "1829 mm",
    "Height": "1469 mm",
    "Wheelbase": "2680 mm"
  },
  "variants": [
    { "name": "Style 2.0 TSI", "price": "₹27.35 Lakh" },
    { "name": "L&K 2.0 TSI", "price": "₹30.45 Lakh" }
  ],
  "pros": [
    "Premium and spacious interior",
    "Powerful and refined petrol engine",
    "Loaded with advanced features",
    "Large boot space (600 litres)",
    "Smooth and quick DSG gearbox"
  ],
  "cons": [
    "No diesel engine option",
    "Low ground clearance",
    "Pricey compared to some rivals"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "15.8 kmpl" }
  ],
  "colours": [
    { "name": "Candy White", "image": "" },
    { "name": "Lava Blue", "image": "" },
    { "name": "Magic Black", "image": "" },
    { "name": "Graphite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10-inch Touchscreen Infotainment System",
    "Virtual Cockpit Digital Instrument Cluster",
    "Dual-Zone Climate Control",
    "Adaptive LED Headlamps",
    "Wireless Android Auto & Apple CarPlay",
    "Ventilated Leather Seats",
    "Front and Rear Parking Sensors"
  ],
  "reviews": []
},
"Skoda Enyaq": {
  "type": "Electric SUV",
  "description": "An upcoming electric SUV that combines sustainability with Skoda's signature design.",
  "image": "",
  "brief": "The Skoda Enyaq is an all-electric SUV designed to offer a premium driving experience with cutting-edge technology, spacious interiors, and impressive range.",
  "price": "Expected ₹60 - ₹65 Lakh*",
  "specifications": {
    "Battery Capacity": "82 kWh",
    "Power": "265 PS",
    "Torque": "425 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "500+ km (WLTP)",
    "Charging Time (DC Fast Charging)": "10-80% in ~30 minutes",
    "Transmission": "Single-Speed Automatic",
    "Ground Clearance": "190 mm",
    "Length": "4649 mm",
    "Width": "1879 mm",
    "Height": "1616 mm",
    "Wheelbase": "2765 mm"
  },
  "variants": [
    { "name": "Enyaq iV 80", "price": "Expected ₹60 Lakh" },
    { "name": "Enyaq iV 80X", "price": "Expected ₹65 Lakh" }
  ],
  "pros": [
    "Long electric range",
    "Premium and futuristic interior",
    "Advanced safety and driver-assist features",
    "Spacious cabin with high-quality materials",
    "Fast-charging capability"
  ],
  "cons": [
    "Premium pricing",
    "Limited charging infrastructure in some regions",
    "Availability may be limited in initial launch phase"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "range": "500+ km (WLTP)" }
  ],
  "colours": [
    { "name": "Moon White Metallic", "image": "" },
    { "name": "Race Blue Metallic", "image": "" },
    { "name": "Mamba Green", "image": "" },
    { "name": "Graphite Grey Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "13-inch Touchscreen Infotainment System",
    "Digital Cockpit Display",
    "Augmented Reality Head-Up Display",
    "Heated and Ventilated Seats",
    "Adaptive Cruise Control",
    "360-Degree Camera",
    "Level 2 Autonomous Driving Features"
  ],
  "reviews": []
},
"Skoda Elroq": {
  "type": "SUV",
  "description": "An upcoming SUV designed to expand Skoda's offerings in the Indian market.",
  "image": "",
  "brief": "The Skoda Elroq is an upcoming SUV expected to bring a mix of modern design, spacious interiors, and advanced technology, catering to the evolving demands of SUV enthusiasts.",
  "price": "Expected ₹35 - ₹40 Lakh*",
  "specifications": {
    "Engine": "Expected 2.0L TSI Petrol / 2.0L TDI Diesel",
    "Power": "187 - 200 PS (Expected)",
    "Torque": "320 - 400 Nm (Expected)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive / All Wheel Drive",
    "Mileage": "Expected 14-18 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "7-speed DSG Automatic",
    "Fuel Tank Capacity": "Approx 60 Litres",
    "Ground Clearance": "190 mm (Expected)",
    "Length": "Around 4500 mm",
    "Width": "Around 1850 mm",
    "Height": "Approx 1600 mm",
    "Wheelbase": "2700 mm"
  },
  "variants": [
    { "name": "Base Variant", "price": "Expected ₹35 Lakh" },
    { "name": "Top Variant", "price": "Expected ₹40 Lakh" }
  ],
  "pros": [
    "Modern and stylish design",
    "Expected premium features and safety tech",
    "Spacious and comfortable cabin",
    "Multiple powertrain options",
    "Skoda’s reliability and build quality"
  ],
  "cons": [
    "Yet to be launched, details unconfirmed",
    "Expected premium pricing",
    "Unknown real-world performance"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14-16 kmpl (Expected)" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "16-18 kmpl (Expected)" }
  ],
  "colours": [
    { "name": "Candy White", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Race Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Advanced Infotainment System",
    "Digital Driver’s Display",
    "Adaptive LED Headlamps",
    "Panoramic Sunroof",
    "360-degree Camera",
    "ADAS Safety Features"
  ],
  "reviews": []
},
"A-Class Limousine": {
  "type": "Hatchback",
  "description": "A compact luxury hatchback offering advanced technology and a premium interior.",
  "image": "",
  "brief": "The Mercedes-Benz A-Class Limousine is a refined luxury hatchback that blends cutting-edge technology, comfort, and an elegant design, perfect for urban driving.",
  "price": "₹45.80 - ₹48.90 Lakh*",
  "specifications": {
    "Engine": "1.3L Turbo Petrol / 2.0L Diesel",
    "Power": "163 PS (Petrol) / 150 PS (Diesel)",
    "Torque": "250 Nm (Petrol) / 320 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "16 - 21 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "7-speed DCT Automatic",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "160 mm",
    "Length": "4549 mm",
    "Width": "1796 mm",
    "Height": "1446 mm",
    "Wheelbase": "2729 mm"
  },
  "variants": [
    { "name": "A 200 Petrol", "price": "₹45.80 Lakh" },
    { "name": "A 200d Diesel", "price": "₹48.90 Lakh" }
  ],
  "pros": [
    "Luxurious and feature-rich interior",
    "Advanced MBUX infotainment system",
    "Efficient petrol and diesel engine options",
    "Good ride and handling balance",
    "Premium safety features"
  ],
  "cons": [
    "Expensive for a compact luxury hatchback",
    "Limited rear-seat space",
    "No all-wheel drive option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "21 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Cosmos Black", "image": "" },
    { "name": "Iridium Silver", "image": "" },
    { "name": "Mountain Grey", "image": "" },
    { "name": "Denim Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment with Voice Control",
    "Digital Driver’s Display",
    "Panoramic Sunroof",
    "Wireless Charging",
    "Dual-Zone Climate Control",
    "ADAS Safety Features"
  ],
  "reviews": []
},
"C-Class": {
  "type": "Sedan",
  "description": "A luxury sedan known for its elegant design and dynamic performance.",
  "image": "",
  "brief": "The Mercedes-Benz C-Class is a premium sedan that blends luxury, cutting-edge technology, and exhilarating performance, making it an excellent choice for city and highway driving.",
  "price": "₹58.60 - ₹62.90 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Petrol / 2.0L Diesel",
    "Power": "204 PS (Petrol) / 265 PS (Diesel)",
    "Torque": "300 Nm (Petrol) / 550 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive",
    "Mileage": "16.9 - 23 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "66 Litres",
    "Ground Clearance": "157 mm",
    "Length": "4751 mm",
    "Width": "1820 mm",
    "Height": "1437 mm",
    "Wheelbase": "2865 mm"
  },
  "variants": [
    { "name": "C 200 Petrol", "price": "₹58.60 Lakh" },
    { "name": "C 220d Diesel", "price": "₹60.80 Lakh" },
    { "name": "C 300d Diesel", "price": "₹62.90 Lakh" }
  ],
  "pros": [
    "Premium and feature-loaded cabin",
    "Powerful and refined engine options",
    "Excellent ride and handling balance",
    "Advanced driver assistance systems",
    "Fuel-efficient diesel variant"
  ],
  "cons": [
    "Expensive compared to rivals",
    "No all-wheel-drive option in India",
    "Rear seat space could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16.9 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "23 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Mojave Silver", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Selenite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment with AI Assistance",
    "Digital Cockpit with 12.3-inch Display",
    "Burmester Surround Sound System",
    "Panoramic Sunroof",
    "Wireless Apple CarPlay and Android Auto",
    "ADAS with Active Brake Assist"
  ],
  "reviews": []
},
"E-Class": {
  "type": "Sedan",
  "description": "A premium sedan offering a blend of luxury, comfort, and advanced features.",
  "image": "",
  "brief": "The Mercedes-Benz E-Class is a luxury sedan that delivers a perfect balance of comfort, technology, and performance, making it a top choice in the executive sedan segment.",
  "price": "₹72.80 - ₹88.00 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Petrol / 3.0L Diesel",
    "Power": "197 PS (Petrol) / 286 PS (Diesel)",
    "Torque": "320 Nm (Petrol) / 600 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive",
    "Mileage": "15 - 20 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "66 Litres",
    "Ground Clearance": "121 mm",
    "Length": "5075 mm",
    "Width": "1860 mm",
    "Height": "1495 mm",
    "Wheelbase": "3079 mm"
  },
  "variants": [
    { "name": "E 200 Petrol", "price": "₹72.80 Lakh" },
    { "name": "E 220d Diesel", "price": "₹74.70 Lakh" },
    { "name": "E 350d Diesel", "price": "₹88.00 Lakh" }
  ],
  "pros": [
    "Luxurious and spacious cabin",
    "Smooth and refined powertrains",
    "Advanced technology and safety features",
    "Excellent ride quality",
    "Long wheelbase for superior rear-seat comfort"
  ],
  "cons": [
    "Higher price compared to rivals",
    "Limited ground clearance",
    "Petrol variant lacks outright power"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "15 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "20 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Selenite Grey", "image": "" },
    { "name": "Mojave Silver", "image": "" },
    { "name": "Designo Hyacinth Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment with AI Assistance",
    "Twin 12.3-inch Digital Displays",
    "Burmester Surround Sound System",
    "Wireless Charging",
    "Air Suspension for Superior Comfort",
    "ADAS with Lane Keep Assist and Adaptive Cruise Control"
  ],
  "reviews": []
},
"S-Class": {
  "type": "Sedan",
  "description": "The flagship luxury sedan featuring cutting-edge technology and unparalleled comfort.",
  "image": "",
  "brief": "The Mercedes-Benz S-Class is the epitome of luxury and innovation, offering state-of-the-art technology, supreme comfort, and a refined driving experience.",
  "price": "₹1.71 - ₹2.17 Crore*",
  "specifications": {
    "Engine": "3.0L Diesel / 3.0L Petrol",
    "Power": "286 PS (Diesel) / 367 PS (Petrol)",
    "Torque": "600 Nm (Diesel) / 500 Nm (Petrol)",
    "Seating Capacity": "4-5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "11 - 13 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "70 Litres",
    "Ground Clearance": "109 mm",
    "Length": "5289 mm",
    "Width": "1954 mm",
    "Height": "1503 mm",
    "Wheelbase": "3216 mm"
  },
  "variants": [
    { "name": "S 350d Diesel", "price": "₹1.71 Crore" },
    { "name": "S 450 Petrol", "price": "₹1.80 Crore" },
    { "name": "S 400d 4MATIC Diesel", "price": "₹2.17 Crore" }
  ],
  "pros": [
    "Unmatched luxury and comfort",
    "Exceptional ride quality with air suspension",
    "High-tech features with MBUX infotainment",
    "Powerful and refined engine options",
    "Top-tier safety features"
  ],
  "cons": [
    "Extremely high price",
    "Low ground clearance",
    "Expensive maintenance and service costs"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "13 kmpl" },
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "11 kmpl" }
  ],
  "colours": [
    { "name": "Obsidian Black", "image": "" },
    { "name": "Selenite Grey", "image": "" },
    { "name": "Designo Diamond White", "image": "" },
    { "name": "Onyx Black", "image": "" },
    { "name": "Emerald Green", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Hyperscreen with AI Assistance",
    "Burmester 4D Surround Sound System",
    "Executive Rear Seats with Massage Function",
    "Augmented Reality Heads-Up Display",
    "Level 3 Autonomous Driving Capabilities",
    "Active Ambient Lighting"
  ],
  "reviews": []
},
"CLA": {
  "type": "Sedan",
  "description": "A stylish compact sedan with a coupe-like design and sporty performance.",
  "image": "",
  "brief": "The Mercedes-Benz CLA offers a perfect blend of elegance and sportiness, featuring a sleek design, premium interiors, and dynamic driving performance.",
  "price": "₹45 - ₹48 Lakh*",
  "specifications": {
    "Engine": "2.0L Petrol",
    "Power": "190 PS",
    "Torque": "300 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "15 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "7-speed Dual Clutch Automatic",
    "Fuel Tank Capacity": "50 Litres",
    "Ground Clearance": "160 mm",
    "Length": "4688 mm",
    "Width": "1830 mm",
    "Height": "1439 mm",
    "Wheelbase": "2729 mm"
  },
  "variants": [
    { "name": "CLA 200", "price": "₹45 Lakh" },
    { "name": "CLA 250", "price": "₹48 Lakh" }
  ],
  "pros": [
    "Sleek and stylish coupe-like design",
    "Premium interior with high-tech features",
    "Responsive and efficient engine",
    "Good fuel economy",
    "Advanced safety features"
  ],
  "cons": [
    "Limited rear headroom due to coupe design",
    "Firm ride quality",
    "Expensive compared to rivals"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "15 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Cosmos Black", "image": "" },
    { "name": "Mountain Grey", "image": "" },
    { "name": "Denim Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment System",
    "Panoramic Sunroof",
    "12.3-inch Digital Instrument Cluster",
    "Ambient Lighting",
    "Active Brake Assist",
    "Wireless Charging"
  ],
  "reviews": []
},
"GLA": {
  "type": "SUV",
  "description": "A compact luxury SUV offering versatility and advanced safety features.",
  "image": "",
  "brief": "The Mercedes-Benz GLA is a stylish and compact luxury SUV, combining premium features, modern technology, and a dynamic driving experience.",
  "price": "₹48 - ₹52 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Petrol / 2.0L Diesel",
    "Power": "190 PS (Petrol) / 190 PS (Diesel)",
    "Torque": "300 Nm (Petrol) / 400 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive / All Wheel Drive",
    "Mileage": "17 - 19 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "7-speed Dual Clutch Automatic",
    "Fuel Tank Capacity": "51 Litres",
    "Ground Clearance": "183 mm",
    "Length": "4410 mm",
    "Width": "1834 mm",
    "Height": "1611 mm",
    "Wheelbase": "2729 mm"
  },
  "variants": [
    { "name": "GLA 200", "price": "₹48 Lakh" },
    { "name": "GLA 220d", "price": "₹52 Lakh" }
  ],
  "pros": [
    "Premium and stylish design",
    "Feature-rich cabin with high-tech elements",
    "Fuel-efficient engine options",
    "Comfortable ride quality",
    "Advanced safety features"
  ],
  "cons": [
    "Rear seat space is slightly tight",
    "High price compared to some competitors",
    "Boot space could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "17 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "19 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Cosmos Black", "image": "" },
    { "name": "Iridium Silver", "image": "" },
    { "name": "Mountain Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment System",
    "Panoramic Sunroof",
    "Dual 10.25-inch Digital Displays",
    "Adaptive Cruise Control",
    "360-degree Camera",
    "Wireless Charging"
  ],
  "reviews": []
},
"GLB": {
  "type": "SUV",
  "description": "A compact SUV with optional third-row seating, combining luxury and practicality.",
  "image": "",
  "brief": "The Mercedes-Benz GLB is a versatile luxury SUV that offers a spacious cabin, modern technology, and an optional third row for added flexibility.",
  "price": "₹65 - ₹70 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Petrol / 2.0L Diesel",
    "Power": "190 PS (Petrol) / 190 PS (Diesel)",
    "Torque": "320 Nm (Petrol) / 400 Nm (Diesel)",
    "Seating Capacity": "5 / 7",
    "Drive Type": "Front Wheel Drive / All Wheel Drive",
    "Mileage": "16 - 18 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "8-speed Dual Clutch Automatic",
    "Fuel Tank Capacity": "60 Litres",
    "Ground Clearance": "205 mm",
    "Length": "4634 mm",
    "Width": "1834 mm",
    "Height": "1658 mm",
    "Wheelbase": "2829 mm"
  },
  "variants": [
    { "name": "GLB 200", "price": "₹65 Lakh" },
    { "name": "GLB 220d", "price": "₹70 Lakh" }
  ],
  "pros": [
    "Spacious and practical cabin",
    "Optional third-row seating",
    "Premium build quality",
    "Advanced safety and tech features",
    "Smooth and refined engine options"
  ],
  "cons": [
    "Third-row space is limited",
    "Expensive for its segment",
    "Ride could be more comfortable on rough roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "18 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Mountain Grey", "image": "" },
    { "name": "Cosmos Black", "image": "" },
    { "name": "Denim Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Panoramic Sunroof",
    "10.25-inch Digital Instrument Cluster",
    "MBUX Infotainment System",
    "Adaptive Cruise Control",
    "Blind Spot Assist",
    "Wireless Charging"
  ],
  "reviews": []
},
"GLC": {
  "type": "SUV",
  "description": "A luxury SUV offering a balance of performance, comfort, and advanced technology.",
  "image": "",
  "brief": "The Mercedes-Benz GLC is a premium midsize SUV that blends luxury, practicality, and cutting-edge technology for a refined driving experience.",
  "price": "₹75 - ₹85 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Petrol / 2.0L Diesel",
    "Power": "258 PS (Petrol) / 197 PS (Diesel)",
    "Torque": "400 Nm (Petrol) / 440 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "14 - 19 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "66 Litres",
    "Ground Clearance": "201 mm",
    "Length": "4716 mm",
    "Width": "1890 mm",
    "Height": "1640 mm",
    "Wheelbase": "2888 mm"
  },
  "variants": [
    { "name": "GLC 300 4MATIC", "price": "₹75 Lakh" },
    { "name": "GLC 220d 4MATIC", "price": "₹85 Lakh" }
  ],
  "pros": [
    "Luxurious and well-built interior",
    "Smooth and powerful engine options",
    "Advanced MBUX infotainment system",
    "Strong safety features",
    "Comfortable ride quality"
  ],
  "cons": [
    "Expensive compared to some rivals",
    "Rear seat space could be better",
    "Limited off-road capabilities"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "19 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Mojave Silver", "image": "" },
    { "name": "Selenite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "12.3-inch Digital Driver Display",
    "MBUX Infotainment with Voice Command",
    "360-degree Camera",
    "Burmester Surround Sound System",
    "Adaptive LED Headlamps",
    "Wireless Charging"
  ],
  "reviews": []
},
"GLE": {
  "type": "SUV",
  "description": "A premium SUV with a spacious interior and powerful engine options.",
  "image": "",
  "brief": "The Mercedes-Benz GLE is a luxury SUV that offers a blend of comfort, performance, and advanced technology, making it a great choice for families and long journeys.",
  "price": "₹96 Lakh - ₹1.2 Crore*",
  "specifications": {
    "Engine": "2.0L Diesel / 3.0L Diesel / 3.0L Petrol",
    "Power": "245 PS (2.0L Diesel) / 330 PS (3.0L Diesel) / 367 PS (3.0L Petrol)",
    "Torque": "500 Nm (2.0L Diesel) / 700 Nm (3.0L Diesel) / 500 Nm (3.0L Petrol)",
    "Seating Capacity": "5 / 7",
    "Drive Type": "All Wheel Drive",
    "Mileage": "9 - 14 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "85 Litres",
    "Ground Clearance": "200 mm",
    "Length": "4924 mm",
    "Width": "1947 mm",
    "Height": "1772 mm",
    "Wheelbase": "2995 mm"
  },
  "variants": [
    { "name": "GLE 300d 4MATIC", "price": "₹96 Lakh" },
    { "name": "GLE 450 4MATIC", "price": "₹1.1 Crore" },
    { "name": "GLE 400d 4MATIC", "price": "₹1.2 Crore" }
  ],
  "pros": [
    "Spacious and luxurious cabin",
    "Smooth and powerful engine options",
    "Advanced MBUX infotainment system",
    "Air suspension for superior ride quality",
    "Strong safety features"
  ],
  "cons": [
    "Expensive compared to some rivals",
    "Fuel efficiency could be better",
    "Third-row seating is a bit cramped"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "12 - 14 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Mojave Silver", "image": "" },
    { "name": "Selenite Grey", "image": "" },
    { "name": "Emerald Green", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "12.3-inch Digital Driver Display",
    "MBUX Infotainment with AI Assistance",
    "360-degree Camera",
    "Burmester Surround Sound System",
    "Adaptive LED Headlamps",
    "Air Suspension with Adaptive Damping"
  ],
  "reviews": []
},
"GLS": {
  "type": "SUV",
  "description": "A full-size luxury SUV offering three-row seating and advanced features.",
  "image": "",
  "brief": "The Mercedes-Benz GLS is the flagship luxury SUV, offering spacious interiors, premium comfort, and a powerful presence on the road.",
  "price": "₹1.32 Crore - ₹2.92 Crore*",
  "specifications": {
    "Engine": "3.0L Diesel / 3.0L Petrol / 4.0L Petrol",
    "Power": "330 PS (3.0L Diesel) / 381 PS (3.0L Petrol) / 612 PS (4.0L Petrol-AMG)",
    "Torque": "700 Nm (3.0L Diesel) / 500 Nm (3.0L Petrol) / 850 Nm (4.0L Petrol-AMG)",
    "Seating Capacity": "7",
    "Drive Type": "All Wheel Drive",
    "Mileage": "8 - 12 kmpl",
    "Fuel Type": "Petrol / Diesel",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "90 Litres",
    "Ground Clearance": "214 mm",
    "Length": "5207 mm",
    "Width": "1956 mm",
    "Height": "1823 mm",
    "Wheelbase": "3135 mm"
  },
  "variants": [
    { "name": "GLS 400d 4MATIC", "price": "₹1.32 Crore" },
    { "name": "GLS 450 4MATIC", "price": "₹1.32 Crore" },
    { "name": "GLS Maybach 600 4MATIC", "price": "₹2.92 Crore" }
  ],
  "pros": [
    "Spacious and luxurious cabin",
    "Powerful engine options",
    "Cutting-edge technology features",
    "Smooth ride quality with air suspension",
    "Strong road presence"
  ],
  "cons": [
    "High price tag",
    "Large size makes city driving challenging",
    "Fuel efficiency is on the lower side"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "10 - 12 kmpl" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Mojave Silver", "image": "" },
    { "name": "Nautic Blue", "image": "" },
    { "name": "Emerald Green", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment System",
    "Panoramic Sunroof",
    "Burmester 3D Surround Sound System",
    "Adaptive Air Suspension",
    "Multi-Beam LED Headlamps",
    "Active Park Assist"
  ],
  "reviews": []
},
"G-Class": {
  "type": "SUV",
  "description": "An iconic luxury SUV known for its rugged design and off-road capabilities.",
  "image": "",
  "brief": "The Mercedes-Benz G-Class is a legendary off-road SUV with a boxy design, luxurious interiors, and unmatched terrain-conquering abilities.",
  "price": "₹2.55 Crore - ₹4.00 Crore*",
  "specifications": {
    "Engine": "4.0L V8 Bi-Turbo Petrol",
    "Power": "585 PS",
    "Torque": "850 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "6 - 8 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "100 Litres",
    "Ground Clearance": "241 mm",
    "Length": "4873 mm",
    "Width": "1984 mm",
    "Height": "1969 mm",
    "Wheelbase": "2890 mm"
  },
  "variants": [
    { "name": "G 400d Adventure Edition", "price": "₹2.55 Crore" },
    { "name": "AMG G 63", "price": "₹3.30 Crore" },
    { "name": "AMG G 63 4x4²", "price": "₹4.00 Crore" }
  ],
  "pros": [
    "Iconic and rugged design",
    "Powerful V8 engine",
    "Superior off-road capabilities",
    "Luxurious and high-tech interiors",
    "Strong road presence"
  ],
  "cons": [
    "Expensive price tag",
    "Fuel efficiency is very low",
    "Firm ride quality on city roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "6 - 8 kmpl" }
  ],
  "colours": [
    { "name": "Obsidian Black", "image": "" },
    { "name": "Polar White", "image": "" },
    { "name": "G Manufaktur Olive Green", "image": "" },
    { "name": "G Manufaktur South Sea Blue", "image": "" },
    { "name": "G Manufaktur Cherry Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "12.3-inch Digital Cockpit Display",
    "Burmester Surround Sound System",
    "Adaptive Cruise Control",
    "Three Differential Locks",
    "Multibeam LED Headlamps",
    "Luxury Leather Upholstery"
  ],
  "reviews": []
},
"AMG GT": {
  "type": "Coupe",
  "description": "A high-performance sports coupe with a powerful engine and dynamic handling.",
  "image": "",
  "brief": "The Mercedes-AMG GT is a luxury sports coupe offering thrilling performance, aggressive styling, and cutting-edge technology.",
  "price": "₹2.00 Crore - ₹3.50 Crore*",
  "specifications": {
    "Engine": "4.0L V8 Bi-Turbo Petrol",
    "Power": "585 PS",
    "Torque": "800 Nm",
    "Seating Capacity": "2",
    "Drive Type": "All Wheel Drive",
    "Mileage": "8 - 10 kmpl",
    "Fuel Type": "Petrol",
    "Transmission": "9-speed Automatic",
    "Fuel Tank Capacity": "75 Litres",
    "Ground Clearance": "105 mm",
    "Length": "4728 mm",
    "Width": "1983 mm",
    "Height": "1287 mm",
    "Wheelbase": "2700 mm"
  },
  "variants": [
    { "name": "AMG GT 55 4MATIC+", "price": "₹2.00 Crore" },
    { "name": "AMG GT 63 4MATIC+", "price": "₹3.50 Crore" }
  ],
  "pros": [
    "Exhilarating performance",
    "Striking and aerodynamic design",
    "Luxurious and sporty interior",
    "Advanced driving dynamics",
    "High-end safety and tech features"
  ],
  "cons": [
    "Very expensive",
    "Limited practicality",
    "Firm ride on regular roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8 - 10 kmpl" }
  ],
  "colours": [
    { "name": "Sun Yellow", "image": "" },
    { "name": "Graphite Grey Metallic", "image": "" },
    { "name": "Designo Brilliant Blue Magno", "image": "" },
    { "name": "Obsidian Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "AMG Performance 4MATIC+",
    "Burmester 3D Surround Sound System",
    "MBUX Infotainment System",
    "Carbon Fibre Trim Elements",
    "Adaptive Damping Suspension",
    "Aerodynamic Active Rear Wing"
  ],
  "reviews": []
},
"EQS": {
  "type": "Electric Sedan",
  "description": "An all-electric luxury sedan offering zero-emission performance and advanced technology.",
  "image": "",
  "brief": "The Mercedes-Benz EQS is a premium electric sedan that combines cutting-edge technology, luxury, and sustainability for an exceptional driving experience.",
  "price": "₹1.62 Crore - ₹2.45 Crore*",
  "specifications": {
    "Battery Capacity": "107.8 kWh",
    "Power": "333 PS - 658 PS",
    "Torque": "565 Nm - 950 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive / All Wheel Drive",
    "Range": "580 - 857 km (WLTP)",
    "Charging Time": "10 - 80% in 31 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "125 mm",
    "Length": "5223 mm",
    "Width": "1926 mm",
    "Height": "1518 mm",
    "Wheelbase": "3210 mm"
  },
  "variants": [
    { "name": "EQS 580 4MATIC", "price": "₹1.62 Crore" },
    { "name": "AMG EQS 53 4MATIC+", "price": "₹2.45 Crore" }
  ],
  "pros": [
    "Long electric driving range",
    "Luxurious and futuristic interior",
    "Advanced driver assistance features",
    "Smooth and silent driving experience",
    "Rapid DC fast-charging capability"
  ],
  "cons": [
    "Expensive compared to competitors",
    "Large size may be challenging in city traffic",
    "Limited charging infrastructure in some areas"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "580 - 857 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Obsidian Black", "image": "" },
    { "name": "High-Tech Silver", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Sodalite Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Hyperscreen with AI Assistance",
    "Burmester 3D Surround Sound System",
    "AIRMATIC Adaptive Air Suspension",
    "Augmented Reality Head-Up Display",
    "360-Degree Surround View Camera",
    "Active Ambient Lighting with 64 Colors"
  ],
  "reviews": []
},
"EQB": {
  "type": "Electric SUV",
  "description": "An all-electric compact SUV with optional third-row seating and advanced features.",
  "image": "",
  "brief": "The Mercedes-Benz EQB is a compact luxury electric SUV that offers practicality, modern technology, and an emission-free driving experience.",
  "price": "₹77.50 Lakh*",
  "specifications": {
    "Battery Capacity": "66.5 kWh",
    "Power": "228 PS",
    "Torque": "390 Nm",
    "Seating Capacity": "5 - 7",
    "Drive Type": "All Wheel Drive",
    "Range": "423 km (WLTP)",
    "Charging Time": "10 - 80% in 32 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "165 mm",
    "Length": "4684 mm",
    "Width": "1834 mm",
    "Height": "1667 mm",
    "Wheelbase": "2829 mm"
  },
  "variants": [
    { "name": "EQB 300 4MATIC", "price": "₹77.50 Lakh" }
  ],
  "pros": [
    "Electric powertrain with decent range",
    "Optional 7-seater configuration",
    "Premium and tech-laden interior",
    "Smooth and refined driving experience",
    "Mercedes' advanced safety features"
  ],
  "cons": [
    "Limited charging infrastructure",
    "Third-row seats are cramped",
    "Expensive for its segment"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "423 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Polar White", "image": "" },
    { "name": "Denim Blue", "image": "" },
    { "name": "Rosé Gold", "image": "" },
    { "name": "Mountain Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment System",
    "Panoramic Sunroof",
    "Advanced Driver Assistance Systems",
    "LED High-Performance Headlamps",
    "Wireless Charging & Ambient Lighting",
    "Multiple Drive Modes"
  ],
  "reviews": []
},
"EQC": {
  "type": "Electric SUV",
  "description": "An all-electric luxury SUV offering a blend of performance and sustainability.",
  "image": "",
  "brief": "The Mercedes-Benz EQC is a premium electric SUV with a powerful drivetrain, long-range capability, and advanced technology for a sustainable and luxurious driving experience.",
  "price": "₹99.50 Lakh*",
  "specifications": {
    "Battery Capacity": "80 kWh",
    "Power": "408 PS",
    "Torque": "760 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "455 - 471 km (WLTP)",
    "Charging Time": "10 - 80% in 40 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "142 mm",
    "Length": "4762 mm",
    "Width": "1884 mm",
    "Height": "1624 mm",
    "Wheelbase": "2873 mm"
  },
  "variants": [
    { "name": "EQC 400 4MATIC", "price": "₹99.50 Lakh" }
  ],
  "pros": [
    "Powerful dual-motor electric setup",
    "Premium interior with cutting-edge tech",
    "Good range for long-distance travel",
    "Smooth and silent drive experience",
    "Mercedes' advanced safety features"
  ],
  "cons": [
    "Limited charging infrastructure in India",
    "High price compared to competitors",
    "Lower ground clearance limits rough terrain usability"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "455 - 471 km (WLTP range)" }
  ],
  "colours": [
    { "name": "High-Tech Silver", "image": "" },
    { "name": "Graphite Grey", "image": "" },
    { "name": "Polar White", "image": "" },
    { "name": "Brilliant Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Infotainment System with AI Assistance",
    "Panoramic Sunroof",
    "Burmester Surround Sound System",
    "Adaptive Air Suspension",
    "Regenerative Braking with Multiple Modes",
    "Pre-Entry Climate Control"
  ],
  "reviews": []
},
"EQE": {
  "type": "Electric Sedan",
  "description": "An all-electric luxury sedan offering a balance of performance and efficiency.",
  "image": "",
  "brief": "The Mercedes-Benz EQE is a premium electric sedan that combines cutting-edge technology, impressive range, and a futuristic design for an advanced driving experience.",
  "price": "₹1.39 Crore*",
  "specifications": {
    "Battery Capacity": "90.6 kWh",
    "Power": "408 PS",
    "Torque": "858 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "550 - 590 km (WLTP)",
    "Charging Time": "10 - 80% in 32 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "140 mm",
    "Length": "4946 mm",
    "Width": "1961 mm",
    "Height": "1510 mm",
    "Wheelbase": "3120 mm"
  },
  "variants": [
    { "name": "EQE 500 4MATIC", "price": "₹1.39 Crore" }
  ],
  "pros": [
    "Impressive range and fast charging capability",
    "Futuristic interior with advanced MBUX Hyperscreen",
    "Strong performance with instant torque",
    "Luxury-class ride quality and comfort",
    "Extensive safety and driver assistance features"
  ],
  "cons": [
    "High price tag compared to competitors",
    "Limited charging infrastructure in some regions",
    "Rear headroom slightly limited due to coupe-like roofline"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "550 - 590 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Obsidian Black", "image": "" },
    { "name": "Sodalite Blue", "image": "" },
    { "name": "High-Tech Silver", "image": "" },
    { "name": "Polar White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "MBUX Hyperscreen with AI-Powered Assistance",
    "Augmented Reality Head-Up Display",
    "Adaptive Air Suspension",
    "Burmester 3D Surround Sound System",
    "Rear-Axle Steering for Enhanced Maneuverability",
    "Advanced Driver Assistance Systems"
  ],
  "reviews": []
},
"BMW 2 Series": {
  "type": "Sedan",
  "description": "A compact luxury sedan offering dynamic performance and modern design.",
  "image": "",
  "brief": "The BMW 2 Series is a sporty and premium compact sedan that delivers an engaging driving experience with advanced technology and elegant styling.",
  "price": "₹43.50 Lakh*",
  "specifications": {
    "Engine": "1998 cc, 4-cylinder Turbo Petrol",
    "Power": "190 PS",
    "Torque": "280 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "14.82 kmpl",
    "Transmission": "7-speed Steptronic Automatic",
    "Ground Clearance": "157 mm",
    "Length": "4526 mm",
    "Width": "1800 mm",
    "Height": "1420 mm",
    "Wheelbase": "2670 mm"
  },
  "variants": [
    { "name": "220i M Sport", "price": "₹43.50 Lakh" }
  ],
  "pros": [
    "Engaging and sporty driving dynamics",
    "Premium and well-equipped interior",
    "Strong road presence with elegant design",
    "Advanced infotainment and connectivity features",
    "Good fuel efficiency for a luxury sedan"
  ],
  "cons": [
    "Rear seat space is a bit cramped",
    "Limited boot space compared to rivals",
    "No all-wheel drive option available"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14.82 kmpl" }
  ],
  "colours": [
    { "name": "Alpine White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Melbourne Red", "image": "" },
    { "name": "Storm Bay Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10.25-inch Touchscreen Infotainment System",
    "BMW Live Cockpit Professional",
    "Wireless Apple CarPlay & Android Auto",
    "Harman Kardon Surround Sound System",
    "M Sport Package with Aerodynamic Styling",
    "Advanced Driver Assistance Systems"
  ],
  "reviews": []
},
"BMW 3 Series": {
  "type": "Sedan",
  "description": "A luxury sedan known for its sporty handling and premium features.",
  "image": "",
  "brief": "The BMW 3 Series is a dynamic luxury sedan that offers a perfect balance of performance, comfort, and advanced technology.",
  "price": "₹72.90 Lakh*",
  "specifications": {
    "Engine": "2998 cc, 6-cylinder Turbo Petrol",
    "Power": "374 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "13.02 kmpl",
    "Transmission": "8-speed Steptronic Automatic",
    "Ground Clearance": "157 mm",
    "Length": "4713 mm",
    "Width": "1827 mm",
    "Height": "1440 mm",
    "Wheelbase": "2851 mm"
  },
  "variants": [
    { "name": "M340i xDrive", "price": "₹72.90 Lakh" }
  ],
  "pros": [
    "Powerful engine with sporty performance",
    "Premium and feature-rich interior",
    "Advanced driver assistance features",
    "Precise handling and engaging driving experience",
    "Spacious and comfortable cabin"
  ],
  "cons": [
    "High price compared to some competitors",
    "Rear seat could be more spacious",
    "Limited boot space due to AWD setup"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "13.02 kmpl" }
  ],
  "colours": [
    { "name": "Alpine White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Portimao Blue", "image": "" },
    { "name": "Brooklyn Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Harman Kardon Surround Sound System",
    "Adaptive M Suspension",
    "M Sport Differential for Enhanced Traction",
    "Wireless Charging & Connectivity",
    "Advanced Driver Assistance Systems"
  ],
  "reviews": []
},
"BMW 5 Series": {
  "type": "Sedan",
  "description": "A mid-size luxury sedan offering a blend of performance and comfort.",
  "image": "",
  "brief": "The BMW 5 Series is a refined luxury sedan that combines powerful performance, cutting-edge technology, and a premium driving experience.",
  "price": "₹68.90 Lakh*",
  "specifications": {
    "Engine": "1995 cc, 4-cylinder Turbo Diesel",
    "Power": "190 PS",
    "Torque": "400 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive",
    "Mileage": "20.37 kmpl",
    "Transmission": "8-speed Steptronic Automatic",
    "Ground Clearance": "144 mm",
    "Length": "4963 mm",
    "Width": "1868 mm",
    "Height": "1467 mm",
    "Wheelbase": "2975 mm"
  },
  "variants": [
    { "name": "530d M Sport", "price": "₹68.90 Lakh" }
  ],
  "pros": [
    "Luxurious and feature-rich cabin",
    "Powerful and refined diesel engine",
    "Excellent ride comfort and handling",
    "Advanced driver assistance systems",
    "Spacious rear seat and boot space"
  ],
  "cons": [
    "Expensive compared to some rivals",
    "No petrol variant in some markets",
    "Infotainment system could be more intuitive"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "20.37 kmpl" }
  ],
  "colours": [
    { "name": "Alpine White", "image": "" },
    { "name": "Carbon Black", "image": "" },
    { "name": "Phytonic Blue", "image": "" },
    { "name": "Mineral White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Live Cockpit Professional",
    "Harman Kardon Surround Sound System",
    "Adaptive LED Headlights",
    "Wireless Charging & Apple CarPlay",
    "Gesture Control & Voice Commands",
    "Active Cruise Control with Stop & Go"
  ],
  "reviews": []
},
"BMW 7 Series": {
  "type": "Sedan",
  "description": "A flagship luxury sedan featuring advanced technology and opulent interiors.",
  "image": "",
  "brief": "The BMW 7 Series is a premium luxury sedan that offers an exquisite blend of comfort, cutting-edge features, and powerful performance.",
  "price": "₹1.81 Crore*",
  "specifications": {
    "Engine": "2998 cc, 6-cylinder Turbo Petrol",
    "Power": "381 PS",
    "Torque": "520 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "12.61 kmpl",
    "Transmission": "8-speed Steptronic Automatic",
    "Ground Clearance": "135 mm",
    "Length": "5391 mm",
    "Width": "1950 mm",
    "Height": "1548 mm",
    "Wheelbase": "3215 mm"
  },
  "variants": [
    { "name": "740i M Sport", "price": "₹1.81 Crore" }
  ],
  "pros": [
    "Ultra-luxurious and spacious cabin",
    "Cutting-edge technology and infotainment",
    "Refined and powerful engine options",
    "Excellent ride quality and comfort",
    "Impressive safety and driver assistance features"
  ],
  "cons": [
    "Expensive compared to some competitors",
    "Large size makes city driving difficult",
    "Limited rear seat adjustability in some trims"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12.61 kmpl" }
  ],
  "colours": [
    { "name": "Mineral White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Dravit Grey", "image": "" },
    { "name": "Tanzanite Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Theatre Screen (31.3-inch 8K Display)",
    "Executive Lounge Rear Seats with Massage",
    "Sky Lounge Panoramic Sunroof",
    "Bowers & Wilkins Diamond Surround Sound",
    "iDrive 8 with Gesture and Voice Control",
    "Level 2 Autonomous Driving Assistance"
  ],
  "reviews": []
},
"BMW X1": {
  "type": "SUV",
  "description": "A compact luxury SUV combining versatility with BMW's signature performance.",
  "image": "",
  "brief": "The BMW X1 is a premium compact SUV that offers a refined design, modern features, and an engaging driving experience.",
  "price": "₹49.50 Lakh*",
  "specifications": {
    "Engine": "1499 cc, 3-cylinder Turbo Petrol",
    "Power": "136 PS",
    "Torque": "230 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Mileage": "16.35 kmpl",
    "Transmission": "7-speed Dual-Clutch Automatic",
    "Ground Clearance": "183 mm",
    "Length": "4500 mm",
    "Width": "1845 mm",
    "Height": "1642 mm",
    "Wheelbase": "2692 mm"
  },
  "variants": [
    { "name": "sDrive 18i M Sport", "price": "₹49.50 Lakh" },
    { "name": "sDrive 18d xLine", "price": "₹50.90 Lakh" }
  ],
  "pros": [
    "Premium and spacious interior",
    "Smooth and efficient engine",
    "Feature-packed infotainment system",
    "Comfortable ride quality",
    "Modern safety features"
  ],
  "cons": [
    "No all-wheel-drive option in India",
    "Slightly expensive for its segment",
    "Performance could be sportier"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "16.35 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "20.37 kmpl" }
  ],
  "colours": [
    { "name": "Alpine White", "image": "" },
    { "name": "Space Silver", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Phytonic Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Curved Display with iDrive 8",
    "Panoramic Sunroof",
    "Harman Kardon Surround Sound",
    "Wireless Charging",
    "ADAS (Advanced Driver Assistance Systems)",
    "Sports Seats with Memory Function"
  ],
  "reviews": []
},
"BMW X3": {
  "type": "SUV",
  "description": "A luxury SUV offering a spacious interior and dynamic driving experience.",
  "image": "",
  "brief": "The BMW X3 is a premium mid-size SUV that blends luxury, performance, and practicality, making it a great choice for urban and long-distance driving.",
  "price": "₹68.50 Lakh*",
  "specifications": {
    "Engine": "1998 cc, 4-cylinder Turbo Petrol",
    "Power": "252 PS",
    "Torque": "350 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "13.17 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "204 mm",
    "Length": "4708 mm",
    "Width": "1891 mm",
    "Height": "1676 mm",
    "Wheelbase": "2864 mm"
  },
  "variants": [
    { "name": "X3 xDrive30i SportX Plus", "price": "₹68.50 Lakh" },
    { "name": "X3 xDrive20d Luxury Edition", "price": "₹69.90 Lakh" }
  ],
  "pros": [
    "Premium and well-appointed cabin",
    "Strong engine performance",
    "Smooth and refined ride quality",
    "Feature-rich infotainment system",
    "Advanced safety features"
  ],
  "cons": [
    "Slightly firm ride on rough roads",
    "Higher price compared to competitors",
    "Diesel variant is more fuel-efficient than petrol"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "13.17 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "16.55 kmpl" }
  ],
  "colours": [
    { "name": "Mineral White", "image": "" },
    { "name": "Phytonic Blue", "image": "" },
    { "name": "Brooklyn Grey", "image": "" },
    { "name": "Carbon Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Live Cockpit Professional",
    "Panoramic Glass Sunroof",
    "Harman Kardon Sound System",
    "Wireless Apple CarPlay & Android Auto",
    "Adaptive LED Headlights",
    "Gesture Control for Infotainment"
  ],
  "reviews": []
},
"BMW X4": {
  "type": "SUV",
  "description": "A coupe-style SUV with a sporty design and powerful engine options.",
  "image": "",
  "brief": "The BMW X4 is a luxury sports activity coupe that offers a blend of dynamic performance, coupe-like styling, and advanced technology.",
  "price": "₹96.20 Lakh*",
  "specifications": {
    "Engine": "2993 cc, 6-cylinder Turbo Diesel",
    "Power": "265 PS",
    "Torque": "620 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "14.23 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "204 mm",
    "Length": "4751 mm",
    "Width": "1918 mm",
    "Height": "1621 mm",
    "Wheelbase": "2864 mm"
  },
  "variants": [
    { "name": "X4 xDrive30i M Sport", "price": "₹96.20 Lakh" },
    { "name": "X4 xDrive30d M Sport", "price": "₹96.90 Lakh" }
  ],
  "pros": [
    "Sporty coupe-like design",
    "Strong performance from powerful engines",
    "Feature-rich luxury interior",
    "Advanced driver assistance systems",
    "Smooth and refined ride quality"
  ],
  "cons": [
    "Limited rear headroom due to sloping roofline",
    "Expensive compared to rivals",
    "Stiff ride on rough roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12.82 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "14.23 kmpl" }
  ],
  "colours": [
    { "name": "Black Sapphire", "image": "" },
    { "name": "Phytonic Blue", "image": "" },
    { "name": "Carbon Black", "image": "" },
    { "name": "Brooklyn Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Harman Kardon Surround Sound System",
    "M Sport Package with Aerodynamic Kit",
    "Wireless Charging & Smartphone Integration",
    "Adaptive Suspension",
    "360-degree Camera with Parking Assist"
  ],
  "reviews": []
},
"BMW X5": {
  "type": "SUV",
  "description": "A luxury SUV offering a blend of performance, comfort, and advanced technology.",
  "image": "",
  "brief": "The BMW X5 is a premium SUV that delivers powerful performance, a luxurious interior, and cutting-edge technology for an exceptional driving experience.",
  "price": "₹96.00 Lakh - ₹1.09 Crore*",
  "specifications": {
    "Engine": "2998 cc, 6-cylinder Turbo Petrol / 2993 cc, 6-cylinder Turbo Diesel",
    "Power": "381 PS (Petrol) / 286 PS (Diesel)",
    "Torque": "520 Nm (Petrol) / 650 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "11.24 - 12.98 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "214 mm",
    "Length": "4935 mm",
    "Width": "2004 mm",
    "Height": "1765 mm",
    "Wheelbase": "2975 mm"
  },
  "variants": [
    { "name": "X5 xDrive40i M Sport", "price": "₹96.00 Lakh" },
    { "name": "X5 xDrive30d M Sport", "price": "₹1.09 Crore" }
  ],
  "pros": [
    "Powerful engine options with smooth performance",
    "Spacious and luxurious interior",
    "Advanced infotainment system with iDrive 8",
    "Strong road presence and premium design",
    "Comprehensive safety and driver assistance features"
  ],
  "cons": [
    "Expensive compared to rivals",
    "Third-row seating not available",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "11.24 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "12.98 kmpl" }
  ],
  "colours": [
    { "name": "Mineral White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Phytonic Blue", "image": "" },
    { "name": "Brooklyn Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Adaptive Air Suspension",
    "Panoramic Sunroof",
    "Harman Kardon Surround Sound System",
    "360-degree Camera with Parking Assist",
    "BMW Laserlight Headlamps"
  ],
  "reviews": []
},
"BMW X6": {
  "type": "SUV",
  "description": "A luxury SUV with a coupe-like design and powerful engine options.",
  "image": "",
  "brief": "The BMW X6 is a high-performance SUV coupe that combines bold styling, advanced technology, and exhilarating driving dynamics.",
  "price": "₹1.05 Crore*",
  "specifications": {
    "Engine": "2998 cc, 6-cylinder Turbo Petrol",
    "Power": "381 PS",
    "Torque": "520 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "10.31 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "216 mm",
    "Length": "4960 mm",
    "Width": "2004 mm",
    "Height": "1695 mm",
    "Wheelbase": "2975 mm"
  },
  "variants": [
    { "name": "X6 xDrive40i M Sport", "price": "₹1.05 Crore" }
  ],
  "pros": [
    "Sporty and aggressive design",
    "Powerful and refined engine",
    "Luxurious and feature-rich interior",
    "Advanced infotainment and driver assistance features",
    "Strong road presence"
  ],
  "cons": [
    "Expensive compared to traditional SUVs",
    "Limited rear headroom due to coupe roofline",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "10.31 kmpl" }
  ],
  "colours": [
    { "name": "Black Sapphire", "image": "" },
    { "name": "Mineral White", "image": "" },
    { "name": "Manhattan Metallic", "image": "" },
    { "name": "Brooklyn Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Harman Kardon Surround Sound System",
    "M Sport Package with Aggressive Styling",
    "Adaptive Air Suspension",
    "Panoramic Glass Roof",
    "Gesture Control for Infotainment"
  ],
  "reviews": []
},
"BMW X7": {
  "type": "SUV",
  "description": "A full-size luxury SUV offering three-row seating and advanced features.",
  "image": "",
  "brief": "The BMW X7 is a premium three-row SUV that combines opulent luxury, powerful performance, and advanced technology for an unparalleled driving experience.",
  "price": "₹1.27 Crore*",
  "specifications": {
    "Engine": "2993 cc, 6-cylinder Diesel / 2998 cc, 6-cylinder Petrol",
    "Power": "340 PS (Petrol) / 352 PS (Diesel)",
    "Torque": "700 Nm (Diesel) / 520 Nm (Petrol)",
    "Seating Capacity": "6-7",
    "Drive Type": "All Wheel Drive",
    "Mileage": "11.29 - 14.31 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "221 mm",
    "Length": "5181 mm",
    "Width": "2000 mm",
    "Height": "1835 mm",
    "Wheelbase": "3105 mm"
  },
  "variants": [
    { "name": "X7 xDrive40i M Sport", "price": "₹1.27 Crore" },
    { "name": "X7 xDrive40d M Sport", "price": "₹1.30 Crore" }
  ],
  "pros": [
    "Spacious and ultra-luxurious cabin",
    "Powerful and refined engine options",
    "Advanced driver assistance features",
    "High-quality materials and craftsmanship",
    "Smooth and comfortable ride quality"
  ],
  "cons": [
    "Expensive in its segment",
    "Large size makes it difficult to maneuver in tight spaces",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "11.29 kmpl" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "14.31 kmpl" }
  ],
  "colours": [
    { "name": "Black Sapphire", "image": "" },
    { "name": "Mineral White", "image": "" },
    { "name": "Dravit Grey", "image": "" },
    { "name": "Tanzanite Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Harman Kardon Surround Sound System",
    "Executive Lounge Seating",
    "Panoramic Sky Lounge Roof",
    "Laser Light Headlamps",
    "Adaptive Air Suspension with Comfort Mode"
  ],
  "reviews": []
},
"BMW Z4": {
  "type": "Convertible",
  "description": "A two-seater convertible sports car with a sleek design and dynamic performance.",
  "image": "",
  "brief": "The BMW Z4 is a premium roadster that delivers thrilling performance, sharp handling, and open-top driving pleasure.",
  "price": "₹90.90 Lakh*",
  "specifications": {
    "Engine": "2998 cc, 6-cylinder Petrol",
    "Power": "340 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "2",
    "Drive Type": "Rear Wheel Drive",
    "Mileage": "12.1 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "117 mm",
    "Length": "4324 mm",
    "Width": "1864 mm",
    "Height": "1304 mm",
    "Wheelbase": "2470 mm"
  },
  "variants": [
    { "name": "Z4 M40i", "price": "₹90.90 Lakh" }
  ],
  "pros": [
    "Powerful 6-cylinder engine",
    "Sleek and aggressive roadster design",
    "Quick and responsive handling",
    "Premium and sporty interior",
    "Smooth and efficient automatic transmission"
  ],
  "cons": [
    "Limited cargo space",
    "Only available in a single variant",
    "Not ideal for daily city driving"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12.1 kmpl" }
  ],
  "colours": [
    { "name": "Alpine White", "image": "" },
    { "name": "Misano Blue", "image": "" },
    { "name": "San Francisco Red", "image": "" },
    { "name": "Black Sapphire", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M Sport Differential for Enhanced Traction",
    "Adaptive M Suspension",
    "BMW Live Cockpit Professional",
    "Premium Leather Upholstery",
    "Harman Kardon Surround Sound System",
    "Wireless Apple CarPlay & Android Auto"
  ],
  "reviews": []
},
"BMW i4": {
  "type": "Electric Sedan",
  "description": "An all-electric luxury sedan offering zero-emission performance and advanced technology.",
  "image": "",
  "brief": "The BMW i4 is a premium electric sedan that combines sporty dynamics with a long-range battery and modern luxury.",
  "price": "₹72.50 Lakh*",
  "specifications": {
    "Battery Capacity": "83.9 kWh",
    "Power": "340 PS",
    "Torque": "430 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive",
    "Range": "590 km (WLTP)",
    "Charging Time": "10 - 80% in 31 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "125 mm",
    "Length": "4783 mm",
    "Width": "1852 mm",
    "Height": "1448 mm",
    "Wheelbase": "2856 mm"
  },
  "variants": [
    { "name": "i4 eDrive40", "price": "₹72.50 Lakh" }
  ],
  "pros": [
    "Impressive range and fast charging capability",
    "Sporty handling with instant torque",
    "High-quality interior with modern tech",
    "Silent and refined driving experience",
    "BMW's iconic driving pleasure in an electric form"
  ],
  "cons": [
    "Limited charging infrastructure in some areas",
    "Ground clearance is lower than competitors",
    "Rear headroom slightly compromised due to sloping roofline"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "590 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Mineral White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Skyscraper Grey", "image": "" },
    { "name": "Frozen Portimao Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Harman Kardon Surround Sound System",
    "Adaptive LED Headlights",
    "Wireless Charging & Connectivity",
    "Regenerative Braking for Enhanced Efficiency",
    "Advanced Driver Assistance Systems"
  ],
  "reviews": []
},
"BMW iX": {
  "type": "Electric SUV",
  "description": "An all-electric luxury SUV combining sustainability with BMW's signature design.",
  "image": "",
  "brief": "The BMW iX is a futuristic electric SUV that offers a premium interior, cutting-edge technology, and a powerful electric drivetrain.",
  "price": "₹1.21 Crore*",
  "specifications": {
    "Battery Capacity": "76.6 kWh / 111.5 kWh",
    "Power": "326 PS / 523 PS",
    "Torque": "630 Nm / 765 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "425 - 635 km (WLTP)",
    "Charging Time": "10 - 80% in 35 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "202 mm",
    "Length": "4953 mm",
    "Width": "1967 mm",
    "Height": "1695 mm",
    "Wheelbase": "3000 mm"
  },
  "variants": [
    { "name": "iX xDrive40", "price": "₹1.21 Crore" },
    { "name": "iX xDrive50", "price": "₹1.39 Crore" }
  ],
  "pros": [
    "Excellent electric range and efficiency",
    "Luxurious and high-tech interior",
    "Powerful acceleration with instant torque",
    "Advanced driver assistance systems",
    "Sustainable materials used in cabin design"
  ],
  "cons": [
    "High price compared to competitors",
    "Distinctive styling may not appeal to everyone",
    "Limited fast-charging infrastructure in some regions"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "425 - 635 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Mineral White", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Phytonic Blue", "image": "" },
    { "name": "Storm Bay", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "BMW Curved Display with iDrive 8",
    "Hexagonal Steering Wheel for Enhanced Control",
    "Bowers & Wilkins Diamond Surround Sound",
    "Panoramic Sky Lounge Glass Roof",
    "Regenerative Braking with Adaptive Modes",
    "Advanced Air Suspension for Ultimate Comfort"
  ],
  "reviews": []
},
"BMW i7": {
  "type": "Electric Sedan",
  "description": "An all-electric luxury sedan offering a blend of performance and sustainability.",
  "image": "",
  "brief": "The BMW i7 is a flagship electric sedan that combines opulent luxury, cutting-edge technology, and a powerful electric drivetrain for a premium driving experience.",
  "price": "₹2.03 Crore*",
  "specifications": {
    "Battery Capacity": "101.7 kWh",
    "Power": "544 PS",
    "Torque": "745 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "591 - 625 km (WLTP)",
    "Charging Time": "10 - 80% in 34 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "136 mm",
    "Length": "5391 mm",
    "Width": "1950 mm",
    "Height": "1544 mm",
    "Wheelbase": "3215 mm"
  },
  "variants": [
    { "name": "i7 xDrive60", "price": "₹2.03 Crore" }
  ],
  "pros": [
    "Exceptional luxury and comfort",
    "Long electric range and fast charging",
    "Advanced autonomous driving features",
    "Breathtakingly silent and smooth ride",
    "Rear Executive Lounge Seating with 31-inch Theatre Screen"
  ],
  "cons": [
    "Extremely high price tag",
    "Large dimensions make it less city-friendly",
    "Limited charging infrastructure in some areas"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "591 - 625 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Carbon Black", "image": "" },
    { "name": "Oxide Grey", "image": "" },
    { "name": "Mineral White", "image": "" },
    { "name": "Aventurine Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "31-inch BMW Theatre Screen with 8K Resolution",
    "Bowers & Wilkins Diamond Surround Sound",
    "Panoramic Glass Roof with LED Illumination",
    "Executive Lounge Seating with Reclining Rear Seats",
    "BMW iDrive 8.5 with Gesture and Voice Control",
    "Crystal Headlights with Iconic Glow"
  ],
  "reviews": []
},
"BMW M2": {
  "type": "Coupe",
  "description": "A high-performance coupe with a powerful engine and dynamic handling.",
  "image": "",
  "brief": "The BMW M2 is a compact performance coupe delivering thrilling driving dynamics, aggressive styling, and a powerful twin-turbocharged engine.",
  "price": "₹99.90 Lakh*",
  "specifications": {
    "Engine": "3.0L Twin-Turbocharged Inline-6",
    "Power": "460 PS",
    "Torque": "550 Nm",
    "Seating Capacity": "4",
    "Drive Type": "Rear Wheel Drive",
    "Acceleration (0-100 km/h)": "4.1 seconds",
    "Transmission": "8-speed Automatic / 6-speed Manual",
    "Ground Clearance": "125 mm",
    "Length": "4580 mm",
    "Width": "1887 mm",
    "Height": "1403 mm",
    "Wheelbase": "2747 mm"
  },
  "variants": [
    { "name": "M2 Competition", "price": "₹99.90 Lakh" }
  ],
  "pros": [
    "Thrilling performance and precise handling",
    "Compact size makes it agile and fun to drive",
    "Powerful twin-turbocharged engine",
    "Engaging manual transmission option",
    "M-Sport exhaust delivers an exhilarating sound"
  ],
  "cons": [
    "Limited rear seat space",
    "Stiff ride quality on rough roads",
    "High fuel consumption"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "10.2 km/l" },
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "10.5 km/l" }
  ],
  "colours": [
    { "name": "Zandvoort Blue", "image": "" },
    { "name": "Toronto Red", "image": "" },
    { "name": "Black Sapphire", "image": "" },
    { "name": "Alpine White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M Adaptive Suspension",
    "M Sport Brakes with Blue Calipers",
    "BMW Live Cockpit Professional with 12.3-inch Digital Display",
    "M Carbon Roof (Optional)",
    "M Seats with Extended Merino Leather Upholstery",
    "Active M Differential for Enhanced Traction"
  ],
  "reviews": []
},
"BMW M3": {
  "type": "Sedan",
  "description": "A high-performance sedan offering track-worthy performance and luxury.",
  "image": "",
  "brief": "The BMW M3 is an iconic sports sedan that delivers thrilling performance, precise handling, and everyday usability.",
  "price": "₹1.41 Crore*",
  "specifications": {
    "Engine": "3.0L Twin-Turbocharged Inline-6",
    "Power": "510 PS",
    "Torque": "650 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Rear Wheel Drive / All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.5 seconds",
    "Transmission": "8-speed Automatic / 6-speed Manual",
    "Ground Clearance": "120 mm",
    "Length": "4794 mm",
    "Width": "1903 mm",
    "Height": "1437 mm",
    "Wheelbase": "2857 mm"
  },
  "variants": [
    { "name": "M3 Competition xDrive", "price": "₹1.41 Crore" }
  ],
  "pros": [
    "Exceptional performance and handling",
    "Powerful twin-turbocharged engine",
    "Sporty yet luxurious interior",
    "Advanced driver-assistance features",
    "Available with rear-wheel drive or xDrive AWD"
  ],
  "cons": [
    "Aggressive styling may not appeal to everyone",
    "Firm ride quality on regular roads",
    "High fuel consumption"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9.6 km/l" },
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "9.9 km/l" }
  ],
  "colours": [
    { "name": "Isle of Man Green", "image": "" },
    { "name": "Toronto Red", "image": "" },
    { "name": "Alpine White", "image": "" },
    { "name": "Black Sapphire", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M Carbon Bucket Seats",
    "BMW Curved Display with iDrive 8",
    "M Adaptive Suspension",
    "M Sport Differential for Enhanced Handling",
    "Harman Kardon Surround Sound System",
    "Carbon Fiber Interior Trim"
  ],
  "reviews": []
},
"BMW M4": {
  "type": "Coupe",
  "description": "A high-performance coupe with a powerful engine and dynamic design.",
  "image": "",
  "brief": "The BMW M4 is a track-inspired sports coupe that delivers exhilarating performance, sharp handling, and aggressive styling.",
  "price": "₹1.44 Crore*",
  "specifications": {
    "Engine": "3.0L Twin-Turbocharged Inline-6",
    "Power": "510 PS",
    "Torque": "650 Nm",
    "Seating Capacity": "4",
    "Drive Type": "Rear Wheel Drive / All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.5 seconds",
    "Transmission": "8-speed Automatic / 6-speed Manual",
    "Ground Clearance": "120 mm",
    "Length": "4794 mm",
    "Width": "1887 mm",
    "Height": "1393 mm",
    "Wheelbase": "2857 mm"
  },
  "variants": [
    { "name": "M4 Competition xDrive", "price": "₹1.44 Crore" }
  ],
  "pros": [
    "Blistering acceleration and precise handling",
    "Aggressive and eye-catching design",
    "Luxury-grade interior with sporty elements",
    "Available in rear-wheel drive and xDrive AWD",
    "High-performance braking system"
  ],
  "cons": [
    "Stiff suspension may not be ideal for daily driving",
    "Rear seats are not very spacious",
    "High fuel consumption"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9.3 km/l" },
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "9.7 km/l" }
  ],
  "colours": [
    { "name": "São Paulo Yellow", "image": "" },
    { "name": "Isle of Man Green", "image": "" },
    { "name": "Frozen Portimao Blue", "image": "" },
    { "name": "Brooklyn Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M Carbon Bucket Seats",
    "M Adaptive Suspension",
    "BMW Curved Display with iDrive 8",
    "M Sport Differential for Enhanced Grip",
    "Carbon Fiber Roof for Weight Reduction",
    "Harman Kardon Surround Sound System"
  ],
  "reviews": []
},
"BMW M5": {
  "type": "Sedan",
  "description": "A high-performance luxury sedan offering exceptional power and handling.",
  "image": "",
  "brief": "The BMW M5 is a sports sedan that combines track-level performance with luxury, featuring a powerful engine, advanced technology, and a refined interior.",
  "price": "₹1.80 Crore*",
  "specifications": {
    "Engine": "4.4L Twin-Turbocharged V8",
    "Power": "625 PS",
    "Torque": "750 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.3 seconds",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "132 mm",
    "Length": "4983 mm",
    "Width": "1903 mm",
    "Height": "1473 mm",
    "Wheelbase": "2972 mm"
  },
  "variants": [
    { "name": "M5 Competition", "price": "₹1.80 Crore" }
  ],
  "pros": [
    "Blistering acceleration with powerful V8 engine",
    "Precise handling with advanced AWD system",
    "Luxurious and high-tech cabin",
    "M Mode for customizable driving dynamics",
    "Sporty yet elegant exterior design"
  ],
  "cons": [
    "High fuel consumption",
    "Expensive maintenance costs",
    "Stiff ride on rough roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9.1 km/l" }
  ],
  "colours": [
    { "name": "Marina Bay Blue", "image": "" },
    { "name": "Frozen Deep Green", "image": "" },
    { "name": "Tanzanite Blue", "image": "" },
    { "name": "Brands Hatch Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M xDrive with Active M Differential",
    "M Sport Exhaust System",
    "Adaptive M Suspension",
    "BMW Live Cockpit Professional with iDrive 8",
    "Bowers & Wilkins Diamond Surround Sound System",
    "M Carbon Ceramic Brakes (optional)"
  ],
  "reviews": []
},
"BMW M8": {
  "type": "Convertible",
  "description": "A high-performance convertible sports car with a powerful engine and dynamic design.",
  "image": "",
  "brief": "The BMW M8 is a luxurious grand tourer that offers thrilling performance, a premium cabin, and an open-top driving experience for ultimate excitement.",
  "price": "₹2.55 Crore*",
  "specifications": {
    "Engine": "4.4L Twin-Turbocharged V8",
    "Power": "625 PS",
    "Torque": "750 Nm",
    "Seating Capacity": "4",
    "Drive Type": "All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.3 seconds",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "128 mm",
    "Length": "4867 mm",
    "Width": "1907 mm",
    "Height": "1353 mm",
    "Wheelbase": "2827 mm"
  },
  "variants": [
    { "name": "M8 Competition Convertible", "price": "₹2.55 Crore" }
  ],
  "pros": [
    "Exhilarating performance with a powerful V8 engine",
    "Convertible top enhances the driving experience",
    "Luxurious and tech-packed interior",
    "Precise handling with advanced AWD system",
    "High-quality materials and craftsmanship"
  ],
  "cons": [
    "Limited rear seat space",
    "Expensive to maintain",
    "Low ground clearance may not suit Indian roads"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8.9 km/l" }
  ],
  "colours": [
    { "name": "Barcelona Blue", "image": "" },
    { "name": "Frozen Black", "image": "" },
    { "name": "Marina Bay Blue", "image": "" },
    { "name": "Aventurine Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "M xDrive with Active M Differential",
    "M Carbon Roof for lightweight performance",
    "Adaptive LED Headlights with Laserlight",
    "Harman Kardon Surround Sound System",
    "M Multifunction Seats with premium leather",
    "High-performance M Carbon Ceramic Brakes"
  ],
  "reviews": []
},
"Audi A4": {
  "type": "Sedan",
  "description": "A compact luxury sedan offering a blend of performance and comfort.",
  "image": "",
  "brief": "The Audi A4 is a premium compact sedan that delivers a refined driving experience, modern technology, and elegant design.",
  "price": "₹45.34 Lakh*",
  "specifications": {
    "Engine": "2.0L TFSI Petrol",
    "Power": "190 PS",
    "Torque": "320 Nm",
    "Seating Capacity": "5",
    "Transmission": "7-speed S Tronic Automatic",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "17.4 km/l",
    "Length": "4762 mm",
    "Width": "1847 mm",
    "Height": "1433 mm",
    "Wheelbase": "2819 mm"
  },
  "variants": [
    { "name": "Premium", "price": "₹45.34 Lakh" },
    { "name": "Technology", "price": "₹51.24 Lakh" }
  ],
  "pros": [
    "Premium and well-built interior",
    "Refined and fuel-efficient petrol engine",
    "Smooth ride quality and comfortable suspension",
    "Loaded with modern features and tech"
  ],
  "cons": [
    "No diesel engine option",
    "Lacks sporty driving dynamics compared to rivals",
    "Rear seat space could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "17.4 km/l" }
  ],
  "colours": [
    { "name": "Ibis White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Navarra Blue", "image": "" },
    { "name": "Tango Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Virtual Cockpit Digital Instrument Cluster",
    "3-Zone Climate Control",
    "Bang & Olufsen 3D Sound System",
    "Wireless Charging",
    "LED Matrix Headlamps with DRLs"
  ],
  "reviews": []
},
"Audi A6": {
  "type": "Sedan",
  "description": "A mid-size luxury sedan with advanced technology and a spacious interior.",
  "image": "",
  "brief": "The Audi A6 is a premium executive sedan that offers a perfect balance of luxury, performance, and cutting-edge technology.",
  "price": "₹64.09 Lakh*",
  "specifications": {
    "Engine": "2.0L TFSI Petrol",
    "Power": "245 PS",
    "Torque": "370 Nm",
    "Seating Capacity": "5",
    "Transmission": "7-speed S Tronic Automatic",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "14.11 km/l",
    "Length": "4939 mm",
    "Width": "1886 mm",
    "Height": "1457 mm",
    "Wheelbase": "2924 mm"
  },
  "variants": [
    { "name": "Premium Plus", "price": "₹64.09 Lakh" },
    { "name": "Technology", "price": "₹69.22 Lakh" }
  ],
  "pros": [
    "Premium and tech-loaded cabin",
    "Smooth and powerful petrol engine",
    "Spacious rear seat with ample legroom",
    "High-quality materials and finish"
  ],
  "cons": [
    "No diesel engine option",
    "Lacks a more powerful performance variant",
    "Front-wheel drive only, no Quattro AWD option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14.11 km/l" }
  ],
  "colours": [
    { "name": "Ibis White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Firmament Blue", "image": "" },
    { "name": "Tango Red", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit Plus",
    "Adaptive Air Suspension",
    "Four-Zone Climate Control",
    "Bang & Olufsen 3D Sound System",
    "HD Matrix LED Headlamps"
  ],
  "reviews": []
},
"Audi A8 L": {
  "type": "Sedan",
  "description": "A flagship luxury sedan featuring opulent interiors and cutting-edge features.",
  "image": "",
  "brief": "The Audi A8 L is the epitome of luxury, offering a spacious and high-tech cabin with supreme comfort and refined performance.",
  "price": "₹1.34 Crore*",
  "specifications": {
    "Engine": "3.0L TFSI V6 Petrol",
    "Power": "340 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "5",
    "Transmission": "8-speed Tiptronic Automatic",
    "Drive Type": "Quattro All Wheel Drive",
    "Fuel Efficiency": "12.0 km/l",
    "Length": "5302 mm",
    "Width": "1945 mm",
    "Height": "1488 mm",
    "Wheelbase": "3128 mm"
  },
  "variants": [
    { "name": "A8 L 55 TFSI Quattro", "price": "₹1.34 Crore" }
  ],
  "pros": [
    "Ultra-luxurious and spacious cabin",
    "Top-notch technology and connectivity features",
    "Powerful and refined V6 engine",
    "Quattro AWD system for superior handling"
  ],
  "cons": [
    "High price tag",
    "Limited rear-seat customization compared to rivals",
    "Petrol-only variant, no diesel option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12.0 km/l" }
  ],
  "colours": [
    { "name": "Vesuvius Grey", "image": "" },
    { "name": "Glacier White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Floret Silver", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Rear Seat Executive Package",
    "Bang & Olufsen 3D Advanced Sound System",
    "HD Matrix LED with Laser Light",
    "Massage, Ventilated & Heated Seats",
    "Predictive Adaptive Air Suspension"
  ],
  "reviews": []
},
"Audi Q3": {
  "type": "SUV",
  "description": "A compact luxury SUV combining versatility with premium features.",
  "image": "",
  "brief": "The Audi Q3 is a stylish and feature-packed compact luxury SUV, offering a refined driving experience with a premium cabin.",
  "price": "₹46.27 Lakh*",
  "specifications": {
    "Engine": "2.0L TFSI Petrol",
    "Power": "190 PS",
    "Torque": "320 Nm",
    "Seating Capacity": "5",
    "Transmission": "7-speed S Tronic Automatic",
    "Drive Type": "Quattro All Wheel Drive",
    "Fuel Efficiency": "14.93 km/l",
    "Length": "4485 mm",
    "Width": "1849 mm",
    "Height": "1616 mm",
    "Wheelbase": "2680 mm"
  },
  "variants": [
    { "name": "Q3 Premium Plus", "price": "₹46.27 Lakh" },
    { "name": "Q3 Technology", "price": "₹50.39 Lakh" }
  ],
  "pros": [
    "Premium and tech-loaded interior",
    "Quattro AWD for excellent handling",
    "Efficient and punchy engine",
    "Good ride comfort and practicality"
  ],
  "cons": [
    "No diesel engine option",
    "Rear seat space slightly tight for three passengers",
    "High maintenance costs"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14.93 km/l" }
  ],
  "colours": [
    { "name": "Pulse Orange", "image": "" },
    { "name": "Glacier White", "image": "" },
    { "name": "Chronos Grey", "image": "" },
    { "name": "Mythos Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10.1-inch MMI Touchscreen",
    "Virtual Cockpit Digital Instrument Cluster",
    "Panoramic Sunroof",
    "LED Headlamps with DRLs",
    "Wireless Charging"
  ],
  "reviews": []
},
"Audi Q5": {
  "type": "SUV",
  "description": "A luxury SUV offering a spacious interior and dynamic driving experience.",
  "image": "",
  "brief": "The Audi Q5 is a premium mid-size SUV that blends luxury, technology, and performance for a refined driving experience.",
  "price": "₹65.18 Lakh*",
  "specifications": {
    "Engine": "2.0L TFSI Petrol",
    "Power": "265 PS",
    "Torque": "370 Nm",
    "Seating Capacity": "5",
    "Transmission": "7-speed S Tronic Automatic",
    "Drive Type": "Quattro All Wheel Drive",
    "Fuel Efficiency": "13.47 km/l",
    "Length": "4682 mm",
    "Width": "1893 mm",
    "Height": "1655 mm",
    "Wheelbase": "2819 mm"
  },
  "variants": [
    { "name": "Q5 Premium Plus", "price": "₹65.18 Lakh" },
    { "name": "Q5 Technology", "price": "₹70.45 Lakh" }
  ],
  "pros": [
    "High-quality, feature-rich cabin",
    "Quattro AWD enhances grip and stability",
    "Smooth and refined engine performance",
    "Comfortable ride quality"
  ],
  "cons": [
    "No diesel engine option",
    "Slightly expensive compared to rivals",
    "Infotainment lacks touchscreen functionality"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "13.47 km/l" }
  ],
  "colours": [
    { "name": "Navarra Blue", "image": "" },
    { "name": "Glacier White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Manhattan Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit Plus",
    "Bang & Olufsen 3D Sound System",
    "Quattro All-Wheel Drive",
    "Panoramic Sunroof",
    "Adaptive Suspension"
  ],
  "reviews": []
},
"Audi Q7": {
  "type": "SUV",
  "description": "A full-size luxury SUV with three-row seating and advanced technology.",
  "image": "",
  "brief": "The Audi Q7 is a premium luxury SUV that offers a spacious cabin, cutting-edge technology, and a powerful engine for a refined driving experience.",
  "price": "₹86.92 Lakh*",
  "specifications": {
    "Engine": "3.0L TFSI V6 Petrol",
    "Power": "340 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "7",
    "Transmission": "8-speed Tiptronic Automatic",
    "Drive Type": "Quattro All Wheel Drive",
    "Fuel Efficiency": "11.21 km/l",
    "Length": "5064 mm",
    "Width": "1970 mm",
    "Height": "1703 mm",
    "Wheelbase": "2999 mm"
  },
  "variants": [
    { "name": "Q7 Premium Plus", "price": "₹86.92 Lakh" },
    { "name": "Q7 Technology", "price": "₹94.45 Lakh" }
  ],
  "pros": [
    "Spacious and luxurious cabin",
    "Powerful and refined engine",
    "Quattro AWD provides excellent stability",
    "Feature-rich infotainment system"
  ],
  "cons": [
    "No diesel engine option",
    "Limited third-row space",
    "Expensive compared to some competitors"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "11.21 km/l" }
  ],
  "colours": [
    { "name": "Glacier White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Navarra Blue", "image": "" },
    { "name": "Samurai Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Matrix LED Headlamps",
    "Bang & Olufsen 3D Sound System",
    "Virtual Cockpit Plus",
    "Adaptive Air Suspension",
    "Four-Zone Climate Control"
  ],
  "reviews": []
},
"Audi Q8": {
  "type": "SUV",
  "description": "A luxury SUV with a coupe-like design and powerful engine options.",
  "image": "",
  "brief": "The Audi Q8 is a premium SUV that blends the versatility of an SUV with the sporty aesthetics of a coupe, offering a luxurious and dynamic driving experience.",
  "price": "₹1.07 Crore*",
  "specifications": {
    "Engine": "3.0L TFSI V6 Petrol",
    "Power": "340 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "5",
    "Transmission": "8-speed Tiptronic Automatic",
    "Drive Type": "Quattro All Wheel Drive",
    "Fuel Efficiency": "9.8 km/l",
    "Length": "4986 mm",
    "Width": "1995 mm",
    "Height": "1705 mm",
    "Wheelbase": "2995 mm"
  },
  "variants": [
    { "name": "Q8 Celebration", "price": "₹1.07 Crore" },
    { "name": "Q8 Standard", "price": "₹1.43 Crore" }
  ],
  "pros": [
    "Sleek and sporty coupe-SUV design",
    "Luxurious and tech-loaded interior",
    "Strong performance with Quattro AWD",
    "High-quality materials and craftsmanship"
  ],
  "cons": [
    "Expensive compared to some rivals",
    "Limited rear headroom due to sloping roofline",
    "Fuel efficiency could be better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9.8 km/l" }
  ],
  "colours": [
    { "name": "Dragon Orange", "image": "" },
    { "name": "Glacier White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Navarra Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "HD Matrix LED Headlamps",
    "Bang & Olufsen 3D Sound System",
    "Virtual Cockpit Plus",
    "Adaptive Air Suspension",
    "4-Zone Climate Control"
  ],
  "reviews": []
},
"Audi Q8 e-tron": {
  "type": "Electric SUV",
  "description": "An all-electric luxury SUV combining sustainability with Audi's signature design.",
  "image": "",
  "brief": "The Audi Q8 e-tron is a premium electric SUV that offers a luxurious cabin, advanced technology, and a powerful all-electric drivetrain for a sustainable yet dynamic driving experience.",
  "price": "₹1.14 Crore*",
  "specifications": {
    "Battery Capacity": "114 kWh",
    "Power": "408 PS",
    "Torque": "664 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Range": "582 km (WLTP)",
    "Charging Time": "10 - 80% in 31 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "176 mm",
    "Length": "4915 mm",
    "Width": "1976 mm",
    "Height": "1633 mm",
    "Wheelbase": "2928 mm"
  },
  "variants": [
    { "name": "Q8 e-tron 50", "price": "₹1.14 Crore" },
    { "name": "Q8 e-tron 55", "price": "₹1.27 Crore" }
  ],
  "pros": [
    "Long electric driving range",
    "Luxurious and high-tech interior",
    "Quattro AWD for superior handling",
    "Fast charging capability"
  ],
  "cons": [
    "High price tag",
    "Charging infrastructure still developing",
    "Slightly less cargo space due to battery placement"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "582 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Glacier White", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Plasma Blue", "image": "" },
    { "name": "Manhattan Gray", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Digital Matrix LED Headlights",
    "Bang & Olufsen Premium Sound System",
    "Virtual Cockpit Plus",
    "Adaptive Air Suspension",
    "360-Degree Camera with Park Assist"
  ],
  "reviews": []
},
"Audi RS Q8": {
  "type": "SUV",
  "description": "A high-performance luxury SUV offering exceptional power and handling.",
  "image": "",
  "brief": "The Audi RS Q8 is the ultimate performance SUV, blending high-end luxury with exhilarating power and dynamic handling, making it a true sports car in an SUV body.",
  "price": "₹2.22 Crore*",
  "specifications": {
    "Engine": "4.0L Twin-Turbo V8",
    "Power": "600 PS",
    "Torque": "800 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.8 seconds",
    "Transmission": "8-speed Automatic",
    "Top Speed": "250 km/h (electronically limited)",
    "Ground Clearance": "220 mm",
    "Length": "5007 mm",
    "Width": "1998 mm",
    "Height": "1708 mm",
    "Wheelbase": "2998 mm"
  },
  "variants": [
    { "name": "RS Q8", "price": "₹2.22 Crore" }
  ],
  "pros": [
    "Supercar-like performance in an SUV",
    "Quattro AWD ensures superior grip",
    "Luxurious and feature-packed interior",
    "Sporty and aggressive styling"
  ],
  "cons": [
    "High fuel consumption",
    "Expensive compared to rivals",
    "Large size makes city driving challenging"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8 km/l" }
  ],
  "colours": [
    { "name": "Nardo Gray", "image": "" },
    { "name": "Glacier White", "image": "" },
    { "name": "Navarra Blue", "image": "" },
    { "name": "Daytona Gray", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "RS Adaptive Air Suspension",
    "Audi Virtual Cockpit with RS Display",
    "Bang & Olufsen 3D Advanced Sound System",
    "All-Wheel Steering for better handling",
    "Matrix LED Headlights with Laser Light"
  ],
  "reviews": []
},
"Audi S5 Sportback": {
  "type": "Sedan",
  "description": "A sporty luxury sedan with a sleek design and powerful engine.",
  "image": "",
  "brief": "The Audi S5 Sportback is a performance-oriented luxury sedan that combines a stylish coupe-like design with thrilling driving dynamics and everyday practicality.",
  "price": "₹75.74 Lakh*",
  "specifications": {
    "Engine": "3.0L TFSI V6",
    "Power": "354 PS",
    "Torque": "500 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "4.8 seconds",
    "Transmission": "8-speed Automatic",
    "Top Speed": "250 km/h",
    "Ground Clearance": "160 mm",
    "Length": "4765 mm",
    "Width": "1845 mm",
    "Height": "1395 mm",
    "Wheelbase": "2825 mm"
  },
  "variants": [
    { "name": "S5 Sportback", "price": "₹75.74 Lakh" }
  ],
  "pros": [
    "Powerful and refined V6 engine",
    "Quattro AWD ensures superior handling",
    "Luxurious and tech-loaded interior",
    "Sporty yet practical design"
  ],
  "cons": [
    "Rear seat space is a bit limited",
    "Higher price compared to competitors",
    "Firm ride quality due to sporty suspension"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "10.6 km/l" }
  ],
  "colours": [
    { "name": "Turbo Blue", "image": "" },
    { "name": "Tango Red", "image": "" },
    { "name": "Daytona Gray", "image": "" },
    { "name": "Mythos Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit Plus",
    "Bang & Olufsen Premium 3D Sound System",
    "Matrix LED Headlights",
    "Sport Seats with Alcantara Upholstery",
    "Dynamic Steering for better control"
  ],
  "reviews": []
},
"Audi RS e-tron GT": {
  "type": "Electric Sedan",
  "description": "An all-electric luxury sedan offering zero-emission performance and advanced technology.",
  "image": "",
  "brief": "The Audi RS e-tron GT is a high-performance electric sedan that delivers breathtaking acceleration, futuristic technology, and a luxurious yet sporty design.",
  "price": "₹1.94 Crore*",
  "specifications": {
    "Battery Capacity": "93.4 kWh",
    "Power": "646 PS (Boost Mode)",
    "Torque": "830 Nm",
    "Seating Capacity": "4",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.3 seconds",
    "Transmission": "2-speed Automatic",
    "Range": "481 km (WLTP)",
    "Charging Time": "10 - 80% in 23 minutes (DC Fast Charger)",
    "Top Speed": "250 km/h",
    "Ground Clearance": "135 mm",
    "Length": "4989 mm",
    "Width": "1964 mm",
    "Height": "1413 mm",
    "Wheelbase": "2900 mm"
  },
  "variants": [
    { "name": "RS e-tron GT", "price": "₹1.94 Crore" }
  ],
  "pros": [
    "Blistering acceleration and performance",
    "Futuristic and high-tech interior",
    "Quattro AWD for excellent grip and handling",
    "Fast charging capability"
  ],
  "cons": [
    "Expensive compared to rivals",
    "Limited rear-seat space",
    "Charging infrastructure is still developing in some areas"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "481 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Tactical Green", "image": "" },
    { "name": "Mythos Black", "image": "" },
    { "name": "Suzuka Gray", "image": "" },
    { "name": "Kemora Gray", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit Plus",
    "Bang & Olufsen 3D Premium Sound System",
    "Adaptive Air Suspension",
    "Matrix LED Headlights",
    "Four-Wheel Steering for enhanced agility"
  ],
  "reviews": []
},
"Audi S6": {
  "type": "Sedan",
  "description": "A luxury sedan with enhanced performance and sporty styling.",
  "image": "",
  "brief": "The Audi S6 is a high-performance luxury sedan that combines refined comfort with exhilarating power, making it a perfect blend of elegance and sportiness.",
  "price": "₹1.39 Crore*",
  "specifications": {
    "Engine": "2.9L V6 TFSI Twin-Turbo",
    "Power": "450 PS",
    "Torque": "600 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "4.4 seconds",
    "Transmission": "8-speed Tiptronic Automatic",
    "Top Speed": "250 km/h",
    "Fuel Type": "Petrol",
    "Mileage": "10.4 km/l",
    "Ground Clearance": "140 mm",
    "Length": "4943 mm",
    "Width": "1886 mm",
    "Height": "1446 mm",
    "Wheelbase": "2928 mm"
  },
  "variants": [
    { "name": "S6 TFSI Quattro", "price": "₹1.39 Crore" }
  ],
  "pros": [
    "Powerful and refined twin-turbo V6 engine",
    "Quattro AWD for excellent handling",
    "Sporty yet comfortable ride",
    "Luxurious and feature-packed interior"
  ],
  "cons": [
    "Not as engaging as some rivals",
    "High price for its segment",
    "Limited rear-seat legroom"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "10.4 km/l" }
  ],
  "colours": [
    { "name": "Turbo Blue", "image": "" },
    { "name": "Tango Red", "image": "" },
    { "name": "Daytona Gray", "image": "" },
    { "name": "Glacier White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit",
    "Bang & Olufsen 3D Sound System",
    "Sports Suspension with Adaptive Dampers",
    "Matrix LED Headlights",
    "Four-Zone Automatic Climate Control"
  ],
  "reviews": []
},
"Audi S7 Sportback": {
  "type": "Sedan",
  "description": "A luxury sedan with a coupe-like design and powerful engine options.",
  "image": "",
  "brief": "The Audi S7 Sportback is a high-performance luxury sedan with a coupe-inspired design, blending sporty elegance with cutting-edge technology and thrilling performance.",
  "price": "₹1.51 Crore*",
  "specifications": {
    "Engine": "2.9L V6 TFSI Twin-Turbo",
    "Power": "450 PS",
    "Torque": "600 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "4.6 seconds",
    "Transmission": "8-speed Tiptronic Automatic",
    "Top Speed": "250 km/h",
    "Fuel Type": "Petrol",
    "Mileage": "10.2 km/l",
    "Ground Clearance": "135 mm",
    "Length": "4969 mm",
    "Width": "1908 mm",
    "Height": "1417 mm",
    "Wheelbase": "2928 mm"
  },
  "variants": [
    { "name": "S7 Sportback TFSI Quattro", "price": "₹1.51 Crore" }
  ],
  "pros": [
    "Sleek coupe-like design",
    "Powerful twin-turbocharged V6 engine",
    "Luxurious and high-tech interior",
    "Excellent handling with Quattro AWD"
  ],
  "cons": [
    "Limited rear headroom due to sloping roofline",
    "High maintenance costs",
    "Premium price tag"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "10.2 km/l" }
  ],
  "colours": [
    { "name": "Tango Red Metallic", "image": "" },
    { "name": "Daytona Gray Pearl", "image": "" },
    { "name": "Glacier White Metallic", "image": "" },
    { "name": "Mythos Black Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit",
    "Bang & Olufsen 3D Sound System",
    "HD Matrix LED Headlights",
    "Four-Zone Automatic Climate Control",
    "Adaptive Air Suspension"
  ],
  "reviews": []
},
"Audi S8": {
  "type": "Sedan",
  "description": "A flagship luxury sedan offering exceptional performance and opulent interiors.",
  "image": "",
  "brief": "The Audi S8 is a high-performance luxury sedan that blends opulence with exhilarating power, featuring advanced technology and a sophisticated design.",
  "price": "₹1.96 Crore*",
  "specifications": {
    "Engine": "4.0L V8 TFSI Twin-Turbo",
    "Power": "571 PS",
    "Torque": "800 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "3.8 seconds",
    "Transmission": "8-speed Tiptronic Automatic",
    "Top Speed": "250 km/h",
    "Fuel Type": "Petrol",
    "Mileage": "8.3 km/l",
    "Ground Clearance": "121 mm",
    "Length": "5179 mm",
    "Width": "1945 mm",
    "Height": "1473 mm",
    "Wheelbase": "2998 mm"
  },
  "variants": [
    { "name": "S8 TFSI Quattro", "price": "₹1.96 Crore" }
  ],
  "pros": [
    "Powerful twin-turbocharged V8 engine",
    "Ultra-luxurious and tech-rich cabin",
    "Predictive active suspension for superior ride comfort",
    "Quattro AWD for excellent handling"
  ],
  "cons": [
    "Expensive to maintain",
    "Limited rear seat adjustability compared to rivals",
    "Low fuel efficiency"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "8.3 km/l" }
  ],
  "colours": [
    { "name": "Vesuvius Gray Metallic", "image": "" },
    { "name": "Firmament Blue Metallic", "image": "" },
    { "name": "Glacier White Metallic", "image": "" },
    { "name": "Mythos Black Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Predictive Active Suspension",
    "Bang & Olufsen 3D Advanced Sound System",
    "HD Matrix LED Headlights with Laser Light",
    "Rear Seat Entertainment System",
    "Audi Virtual Cockpit Plus"
  ],
  "reviews": []
},
"Audi TT": {
  "type": "Coupe",
  "description": "A compact luxury sports car with a distinctive design and agile handling.",
  "image": "",
  "brief": "The Audi TT is an iconic sports coupe known for its sleek design, precise handling, and exhilarating driving dynamics.",
  "price": "₹72.65 Lakh*",
  "specifications": {
    "Engine": "2.0L TFSI Turbocharged Petrol",
    "Power": "230 PS",
    "Torque": "370 Nm",
    "Seating Capacity": "2",
    "Drive Type": "Quattro All Wheel Drive",
    "Acceleration (0-100 km/h)": "5.3 seconds",
    "Transmission": "7-speed S Tronic Automatic",
    "Top Speed": "250 km/h",
    "Fuel Type": "Petrol",
    "Mileage": "14.33 km/l",
    "Ground Clearance": "135 mm",
    "Length": "4191 mm",
    "Width": "1832 mm",
    "Height": "1353 mm",
    "Wheelbase": "2505 mm"
  },
  "variants": [
    { "name": "TT 45 TFSI Quattro", "price": "₹72.65 Lakh" }
  ],
  "pros": [
    "Striking and timeless design",
    "Engaging and responsive handling",
    "Quattro AWD enhances grip and stability",
    "Premium and tech-loaded interior"
  ],
  "cons": [
    "Limited practicality with only two seats",
    "Small boot space",
    "Not as powerful as some rivals"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "14.33 km/l" }
  ],
  "colours": [
    { "name": "Turbo Blue", "image": "" },
    { "name": "Glacier White Metallic", "image": "" },
    { "name": "Mythos Black Metallic", "image": "" },
    { "name": "Tango Red Metallic", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Audi Virtual Cockpit",
    "Bang & Olufsen Sound System",
    "LED Matrix Headlights",
    "Magnetic Ride Suspension",
    "Sport Seats with Alcantara Upholstery"
  ],
  "reviews": []
},
"Jaguar F-Pace": {
  "type": "SUV",
  "description": "A luxury SUV combining performance with practicality.",
  "image": "",
  "brief": "The Jaguar F-Pace is a dynamic luxury SUV that blends sporty performance with everyday practicality, featuring advanced technology and a premium interior.",
  "price": "₹77.41 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbocharged Petrol / Diesel",
    "Power": "204 - 250 PS",
    "Torque": "430 - 365 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Mileage": "12 - 19 km/l",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "213 mm",
    "Length": "4747 mm",
    "Width": "2175 mm",
    "Height": "1664 mm",
    "Wheelbase": "2874 mm"
  },
  "variants": [
    { "name": "R-Dynamic S Petrol", "price": "₹77.41 Lakh" },
    { "name": "R-Dynamic S Diesel", "price": "₹78.91 Lakh" }
  ],
  "pros": [
    "Stylish and sporty design",
    "Engaging driving dynamics",
    "Premium and spacious interior",
    "Advanced driver assistance features",
    "Strong engine performance"
  ],
  "cons": [
    "High maintenance cost",
    "Limited rear-seat space",
    "Infotainment system could be more intuitive"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12 km/l" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "19 km/l" }
  ],
  "colours": [
    { "name": "Firenze Red", "image": "" },
    { "name": "Santorini Black", "image": "" },
    { "name": "Eiger Grey", "image": "" },
    { "name": "Fuji White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Meridian Surround Sound System",
    "Pivi Pro Infotainment System with 11.4-inch Touchscreen",
    "Adaptive Cruise Control",
    "3D Surround Camera",
    "Configurable Cabin Lighting",
    "All Surface Progress Control"
  ],
  "reviews": []
},
"Jaguar F-Type": {
  "type": "Coupe",
  "description": "A high-performance sports car with a sleek design.",
  "image": "",
  "brief": "The Jaguar F-Type is a stunning sports car that delivers exhilarating performance, a luxurious interior, and a head-turning design.",
  "price": "₹1 Crore*",
  "specifications": {
    "Engine": "5.0L Supercharged V8",
    "Power": "450 - 575 PS",
    "Torque": "580 - 700 Nm",
    "Seating Capacity": "2",
    "Drive Type": "Rear Wheel Drive / All Wheel Drive",
    "Mileage": "9 - 12 km/l",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "100 mm",
    "Length": "4470 mm",
    "Width": "2042 mm",
    "Height": "1307 mm",
    "Wheelbase": "2622 mm"
  },
  "variants": [
    { "name": "F-Type P450 RWD Coupe", "price": "₹1.00 Crore" },
    { "name": "F-Type R75 AWD Coupe", "price": "₹1.53 Crore" }
  ],
  "pros": [
    "Powerful V8 engine with thrilling performance",
    "Iconic sports car design",
    "Premium and driver-focused cabin",
    "Excellent driving dynamics",
    "Distinctive exhaust sound"
  ],
  "cons": [
    "Limited cargo space",
    "Not the most fuel-efficient",
    "Expensive maintenance costs"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "9 - 12 km/l" }
  ],
  "colours": [
    { "name": "Fuji White", "image": "" },
    { "name": "Caldera Red", "image": "" },
    { "name": "Santorini Black", "image": "" },
    { "name": "Eiger Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Meridian Surround Sound System",
    "12.3-inch Interactive Driver Display",
    "Jaguar Drive Control",
    "Switchable Active Exhaust",
    "LED Headlights with Signature DRLs",
    "Torque Vectoring by Braking"
  ],
  "reviews": []
},
"Jaguar I-Pace": {
  "type": "Electric SUV",
  "description": "An all-electric luxury SUV offering zero-emission performance.",
  "image": "",
  "brief": "The Jaguar I-Pace is a premium electric SUV that combines breathtaking design, cutting-edge technology, and impressive range for a futuristic driving experience.",
  "price": "₹1.26 Crore*",
  "specifications": {
    "Battery Capacity": "90 kWh",
    "Power": "400 PS",
    "Torque": "696 Nm",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "470 km (WLTP)",
    "Charging Time": "10 - 80% in 45 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "174 mm",
    "Length": "4682 mm",
    "Width": "2139 mm",
    "Height": "1566 mm",
    "Wheelbase": "2990 mm"
  },
  "variants": [
    { "name": "I-Pace HSE", "price": "₹1.26 Crore" }
  ],
  "pros": [
    "Instant torque for thrilling acceleration",
    "Premium and futuristic interior",
    "Advanced driver assistance features",
    "Good driving range",
    "Sleek aerodynamic design"
  ],
  "cons": [
    "Limited charging infrastructure in some regions",
    "High price compared to competitors",
    "Infotainment system could be more intuitive"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "470 km (WLTP range)" }
  ],
  "colours": [
    { "name": "Firenze Red", "image": "" },
    { "name": "Eiger Grey", "image": "" },
    { "name": "Portofino Blue", "image": "" },
    { "name": "Santorini Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Touch Pro Duo Infotainment System",
    "3D Surround Camera",
    "Adaptive Air Suspension",
    "Head-Up Display",
    "Meridian 3D Surround Sound System",
    "Adaptive Cruise Control with Steering Assist"
  ],
  "reviews": []
},
"MG Comet EV": {
  "type": "Electric Hatchback",
  "description": "A compact electric vehicle designed for urban commuting, offering zero-emission driving.",
  "image": "",
  "brief": "The MG Comet EV is a small yet stylish electric hatchback designed for city driving, featuring a compact footprint, modern features, and an efficient electric powertrain.",
  "price": "₹7.98 Lakh*",
  "specifications": {
    "Battery Capacity": "17.3 kWh",
    "Power": "42 PS",
    "Torque": "110 Nm",
    "Seating Capacity": "4",
    "Drive Type": "Rear Wheel Drive",
    "Range": "230 km (ARAI)",
    "Charging Time": "7 hours (AC Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "165 mm",
    "Length": "2974 mm",
    "Width": "1505 mm",
    "Height": "1640 mm",
    "Wheelbase": "2010 mm"
  },
  "variants": [
    { "name": "Comet EV Pace", "price": "₹7.98 Lakh" },
    { "name": "Comet EV Play", "price": "₹9.28 Lakh" },
    { "name": "Comet EV Plush", "price": "₹9.98 Lakh" }
  ],
  "pros": [
    "Extremely compact and easy to maneuver",
    "Affordable EV with modern features",
    "Low running costs",
    "Stylish and futuristic design",
    "Smart connectivity with touchscreen infotainment"
  ],
  "cons": [
    "Limited range for long-distance travel",
    "Not suitable for highway cruising",
    "Small boot space"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "230 km (ARAI range)" }
  ],
  "colours": [
    { "name": "Apple Green & Starry Black", "image": "" },
    { "name": "Candy White & Starry Black", "image": "" },
    { "name": "Aurora Silver", "image": "" },
    { "name": "Starry Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10.25-inch Digital Cluster & Infotainment System",
    "Smart Keyless Entry",
    "Connected Car Technology",
    "Reverse Parking Camera",
    "Electronic Parking Brake",
    "Voice-Controlled AI Assistant"
  ],
  "reviews": []
},
"MG Astor": {
  "type": "SUV",
  "description": "A compact SUV featuring advanced technology and a stylish design.",
  "image": "",
  "brief": "The MG Astor is a feature-packed compact SUV offering a premium cabin, AI-powered technology, and a bold design, making it a strong contender in its segment.",
  "price": "₹9.98 Lakh*",
  "specifications": {
    "Engine": "1.5L NA Petrol / 1.3L Turbo Petrol",
    "Power": "110 PS (1.5L) / 140 PS (1.3L Turbo)",
    "Torque": "144 Nm (1.5L) / 220 Nm (1.3L Turbo)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Transmission": "6-Speed Manual / CVT / 6-Speed AT",
    "Ground Clearance": "180 mm",
    "Length": "4323 mm",
    "Width": "1809 mm",
    "Height": "1650 mm",
    "Wheelbase": "2585 mm"
  },
  "variants": [
    { "name": "Style EX", "price": "₹9.98 Lakh" },
    { "name": "Super", "price": "₹11.98 Lakh" },
    { "name": "Sharp Pro", "price": "₹14.98 Lakh" },
    { "name": "Savvy Pro Turbo", "price": "₹18.68 Lakh" }
  ],
  "pros": [
    "AI-powered personal assistant",
    "Premium interior with soft-touch materials",
    "ADAS Level 2 safety features",
    "Multiple engine and transmission options",
    "Competitive pricing for the features offered"
  ],
  "cons": [
    "No diesel engine option",
    "Turbo variant pricing is on the higher side",
    "Boot space could have been better"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "14 - 15 kmpl" },
    { "fuelType": "Petrol", "transmission": "Automatic", "mileage": "12 - 14 kmpl" }
  ],
  "colours": [
    { "name": "Spiced Orange", "image": "" },
    { "name": "Aurora Silver", "image": "" },
    { "name": "Glaze Red", "image": "" },
    { "name": "Starry Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "AI-Powered Virtual Assistant",
    "ADAS Level 2 with Adaptive Cruise Control",
    "Panoramic Sunroof",
    "10.1-inch Touchscreen Infotainment",
    "360-degree Camera",
    "Heated ORVMs"
  ],
  "reviews": []
},
"MG Hector": {
  "type": "SUV",
  "description": "A mid-size SUV offering a spacious interior and modern features.",
  "image": "",
  "brief": "The MG Hector is a feature-loaded SUV known for its bold design, spacious cabin, and advanced connected car technology, making it a strong choice in the mid-size SUV segment.",
  "price": "₹14.72 Lakh*",
  "specifications": {
    "Engine": "1.5L Turbo Petrol / 2.0L Diesel",
    "Power": "143 PS (Petrol) / 170 PS (Diesel)",
    "Torque": "250 Nm (Petrol) / 350 Nm (Diesel)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Transmission": "6-Speed Manual / CVT / 6-Speed AT",
    "Ground Clearance": "192 mm",
    "Length": "4699 mm",
    "Width": "1835 mm",
    "Height": "1760 mm",
    "Wheelbase": "2750 mm"
  },
  "variants": [
    { "name": "Style", "price": "₹14.72 Lakh" },
    { "name": "Smart", "price": "₹16.98 Lakh" },
    { "name": "Sharp Pro", "price": "₹19.99 Lakh" },
    { "name": "Savvy Pro", "price": "₹21.73 Lakh" }
  ],
  "pros": [
    "Spacious and comfortable cabin",
    "Advanced connected car features with AI integration",
    "Multiple engine and transmission options",
    "Panoramic sunroof available in higher variants",
    "ADAS features in top trims"
  ],
  "cons": [
    "No all-wheel-drive option",
    "Petrol variants have average fuel efficiency",
    "Diesel engine only available with manual transmission"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "13 - 14 kmpl" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "11 - 12 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "15 - 17 kmpl" }
  ],
  "colours": [
    { "name": "Starry Black", "image": "" },
    { "name": "Glaze Red", "image": "" },
    { "name": "Aurora Silver", "image": "" },
    { "name": "Dune Brown", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "14-inch HD Touchscreen Infotainment System",
    "ADAS Level 2 with Lane Keep Assist",
    "360-degree Camera with Blind Spot Monitoring",
    "Panoramic Sunroof",
    "Wireless Charging with Ventilated Seats",
    "AI-powered Voice Assistant"
  ],
  "reviews": []
},
"MG Hector Plus": {
  "type": "SUV",
  "description": "An extended version of the Hector with additional seating capacity.",
  "image": "",
  "brief": "The MG Hector Plus is a three-row SUV that offers a premium and spacious cabin, loaded with smart features and multiple engine options, making it a great choice for families.",
  "price": "₹17.00 Lakh*",
  "specifications": {
    "Engine": "1.5L Turbo Petrol / 2.0L Diesel",
    "Power": "143 PS (Petrol) / 170 PS (Diesel)",
    "Torque": "250 Nm (Petrol) / 350 Nm (Diesel)",
    "Seating Capacity": "6 / 7",
    "Drive Type": "Front Wheel Drive",
    "Transmission": "6-Speed Manual / CVT / 6-Speed AT",
    "Ground Clearance": "192 mm",
    "Length": "4720 mm",
    "Width": "1835 mm",
    "Height": "1760 mm",
    "Wheelbase": "2750 mm"
  },
  "variants": [
    { "name": "Smart 7-seater", "price": "₹17.00 Lakh" },
    { "name": "Sharp Pro 6-seater", "price": "₹19.50 Lakh" },
    { "name": "Savvy Pro 7-seater", "price": "₹21.80 Lakh" }
  ],
  "pros": [
    "Spacious and comfortable three-row seating",
    "Feature-loaded with AI-connected tech",
    "Panoramic sunroof enhances cabin feel",
    "ADAS features in top trims",
    "Strong road presence with bold design"
  ],
  "cons": [
    "Third-row space is tight for adults",
    "No all-wheel-drive option",
    "Diesel engine only comes with manual transmission"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "12 - 13 kmpl" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "11 - 12 kmpl" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "14 - 16 kmpl" }
  ],
  "colours": [
    { "name": "Starry Black", "image": "" },
    { "name": "Glaze Red", "image": "" },
    { "name": "Aurora Silver", "image": "" },
    { "name": "Dune Brown", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "14-inch HD Touchscreen Infotainment System",
    "ADAS Level 2 with Lane Keep Assist",
    "360-degree Camera with Blind Spot Monitoring",
    "Panoramic Sunroof",
    "Wireless Charging with Ventilated Seats",
    "AI-powered Voice Assistant"
  ],
  "reviews": []
},
"MG ZS EV": {
  "type": "Electric SUV",
  "description": "An electric SUV combining performance with sustainability.",
  "image": "",
  "brief": "The MG ZS EV is a fully electric SUV that offers an impressive range, fast charging, and a feature-rich cabin, making it a great choice for eco-conscious buyers.",
  "price": "₹22.88 Lakh*",
  "specifications": {
    "Battery Capacity": "50.3 kWh",
    "Power": "176 PS",
    "Torque": "280 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Range": "461 km (ARAI certified)",
    "Charging Time": "0-80% in 60 minutes (DC Fast Charger)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "177 mm",
    "Length": "4323 mm",
    "Width": "1809 mm",
    "Height": "1649 mm",
    "Wheelbase": "2585 mm"
  },
  "variants": [
    { "name": "Excite", "price": "₹22.88 Lakh" },
    { "name": "Exclusive", "price": "₹26.00 Lakh" }
  ],
  "pros": [
    "Good driving range on a full charge",
    "Premium and tech-loaded interior",
    "Smooth and silent electric drive",
    "Panoramic sunroof adds to the cabin experience",
    "Strong safety package including ADAS features"
  ],
  "cons": [
    "Limited fast-charging infrastructure in some areas",
    "Slightly premium pricing compared to ICE rivals",
    "Boot space is reduced due to battery placement"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "461 km (ARAI certified range)" }
  ],
  "colours": [
    { "name": "Currant Red", "image": "" },
    { "name": "Ferris White", "image": "" },
    { "name": "Ashen Silver", "image": "" },
    { "name": "Starry Black", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "10.1-inch Touchscreen Infotainment System",
    "Panoramic Sunroof",
    "ADAS Level 2 Safety Features",
    "7-inch Digital Driver Display",
    "Wireless Phone Charging",
    "Vehicle-to-Load (V2L) Power Supply"
  ],
  "reviews": []
},
"MG Gloster": {
  "type": "SUV",
  "description": "A full-size luxury SUV with advanced features and a powerful engine.",
  "image": "",
  "brief": "The MG Gloster is a premium full-size SUV that offers a commanding road presence, luxurious interiors, and advanced driver-assistance features.",
  "price": "₹38.80 Lakh*",
  "specifications": {
    "Engine": "2.0L Turbo Diesel",
    "Power": "161 - 215 PS",
    "Torque": "375 - 480 Nm",
    "Seating Capacity": "6 - 7",
    "Drive Type": "2WD / 4WD",
    "Mileage": "12 kmpl",
    "Transmission": "8-speed Automatic",
    "Ground Clearance": "210 mm",
    "Length": "4985 mm",
    "Width": "1926 mm",
    "Height": "1867 mm",
    "Wheelbase": "2950 mm"
  },
  "variants": [
    { "name": "Sharp 7 Str 2WD", "price": "₹38.80 Lakh" },
    { "name": "Savvy 6 Str 4WD", "price": "₹43.87 Lakh" }
  ],
  "pros": [
    "Spacious and comfortable cabin",
    "ADAS features enhance driving safety",
    "Premium build quality with soft-touch materials",
    "Powerful diesel engine options",
    "Large panoramic sunroof adds to the premium feel"
  ],
  "cons": [
    "Bulkier size makes city driving challenging",
    "Fuel efficiency could be better",
    "Limited brand service network compared to rivals"
  ],
  "mileage": [
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "12 kmpl" }
  ],
  "colours": [
    { "name": "Metal Black", "image": "" },
    { "name": "Warm White", "image": "" },
    { "name": "Deep Golden", "image": "" },
    { "name": "Metal Ash", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "ADAS Level 1 (Autonomous Driving Features)",
    "12.3-inch Touchscreen Infotainment System",
    "4WD with Terrain Modes",
    "360-degree Camera",
    "Ventilated and Powered Front Seats",
    "Three-zone Climate Control"
  ],
  "reviews": []
},
"MG Windsor EV": {
  "type": "Electric SUV",
  "description": "An upcoming electric SUV aimed at providing accessible luxury with zero-emission driving.",
  "image": "",
  "brief": "The MG Windsor EV is an upcoming premium electric SUV designed to offer a blend of performance, range, and advanced technology, making it a strong competitor in the EV segment.",
  "price": "Expected ₹50 - 60 Lakh*",
  "specifications": {
    "Battery Capacity": "77 kWh (Expected)",
    "Power": "300 - 350 PS (Expected)",
    "Torque": "600 - 700 Nm (Expected)",
    "Seating Capacity": "5",
    "Drive Type": "All Wheel Drive",
    "Range": "500 - 550 km (WLTP, Expected)",
    "Charging Time": "10 - 80% in 30 minutes (DC Fast Charger, Expected)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "180 mm (Expected)",
    "Length": "4800 mm (Expected)",
    "Width": "1950 mm (Expected)",
    "Height": "1680 mm (Expected)",
    "Wheelbase": "2900 mm (Expected)"
  },
  "variants": [
    { "name": "Windsor EV Standard", "price": "Expected ₹50 Lakh" },
    { "name": "Windsor EV Long Range", "price": "Expected ₹60 Lakh" }
  ],
  "pros": [
    "Premium electric SUV with expected high range",
    "Futuristic interior with AI-powered infotainment",
    "Strong performance with instant torque",
    "Advanced driver-assistance features",
    "Fast charging capability"
  ],
  "cons": [
    "Expected high price",
    "Charging infrastructure still expanding in some areas",
    "Limited brand presence in the premium EV segment"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "500 - 550 km (Expected WLTP range)" }
  ],
  "colours": [
    { "name": "Pearl White", "image": "" },
    { "name": "Midnight Black", "image": "" },
    { "name": "Metallic Grey", "image": "" },
    { "name": "Ocean Blue", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "AI-Powered Infotainment System",
    "Augmented Reality Head-Up Display",
    "Advanced Driver Assistance Systems (ADAS)",
    "Premium Vegan Leather Upholstery",
    "Panoramic Sunroof",
    "Wireless Charging & Multiple USB-C Ports"
  ],
  "reviews": []
},
"MG Cyberster": {
  "type": "Electric Sports Car",
  "description": "An upcoming electric sports car combining performance with futuristic design.",
  "image": "",
  "brief": "The MG Cyberster is a cutting-edge electric sports car featuring a sleek, aerodynamic design, high-performance powertrain, and state-of-the-art technology, marking MG’s bold step into the future of EV performance.",
  "price": "Expected ₹80 Lakh - ₹1 Crore*",
  "specifications": {
    "Battery Capacity": "77 - 100 kWh (Expected)",
    "Power": "500 - 600 PS (Expected)",
    "Torque": "725 - 800 Nm (Expected)",
    "Seating Capacity": "2",
    "Drive Type": "All Wheel Drive / Rear Wheel Drive (Expected)",
    "Range": "500 - 580 km (WLTP, Expected)",
    "Charging Time": "10 - 80% in 25 minutes (DC Fast Charger, Expected)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "130 mm (Expected)",
    "Length": "4535 mm",
    "Width": "1913 mm",
    "Height": "1329 mm",
    "Wheelbase": "2690 mm"
  },
  "variants": [
    { "name": "Cyberster RWD", "price": "Expected ₹80 Lakh" },
    { "name": "Cyberster AWD", "price": "Expected ₹1 Crore" }
  ],
  "pros": [
    "Futuristic and aerodynamic design",
    "High-performance electric powertrain",
    "Advanced AI-powered infotainment system",
    "Premium interior with sporty elements",
    "Fast charging and impressive range"
  ],
  "cons": [
    "Limited practicality due to two-seater layout",
    "Expected high price tag",
    "MG’s relatively new presence in the high-performance EV segment"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "500 - 580 km (Expected WLTP range)" }
  ],
  "colours": [
    { "name": "Scarlet Red", "image": "" },
    { "name": "Midnight Black", "image": "" },
    { "name": "Lunar White", "image": "" },
    { "name": "Neon Green", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Retractable Soft-Top Roof",
    "Dual-Motor AWD System (High Variant)",
    "Augmented Reality Head-Up Display",
    "AI-Assisted Driving Modes",
    "360° Surround View Camera",
    "Bespoke Sound System for an Immersive Experience"
  ],
  "reviews": []
},
"MG M9": {
  "type": "Electric MPV",
  "description": "An upcoming fully electric luxury MPV designed for families seeking sustainable mobility.",
  "image": "",
  "brief": "The MG M9 is a premium all-electric MPV designed for families and business users, offering a spacious and high-tech cabin, a long-range battery, and a smooth, eco-friendly driving experience.",
  "price": "Expected ₹60 - ₹70 Lakh*",
  "specifications": {
    "Battery Capacity": "90 - 100 kWh (Expected)",
    "Power": "350 - 450 PS (Expected)",
    "Torque": "700 - 800 Nm (Expected)",
    "Seating Capacity": "6 - 7",
    "Drive Type": "All Wheel Drive / Rear Wheel Drive (Expected)",
    "Range": "500 - 600 km (WLTP, Expected)",
    "Charging Time": "10 - 80% in 30 minutes (DC Fast Charger, Expected)",
    "Transmission": "Single-speed Automatic",
    "Ground Clearance": "160 mm (Expected)",
    "Length": "5200 mm",
    "Width": "2000 mm",
    "Height": "1850 mm",
    "Wheelbase": "3200 mm"
  },
  "variants": [
    { "name": "M9 Standard", "price": "Expected ₹60 Lakh" },
    { "name": "M9 Luxury", "price": "Expected ₹70 Lakh" }
  ],
  "pros": [
    "Spacious and luxurious cabin",
    "Long electric range suitable for long trips",
    "Advanced driver assistance systems",
    "Premium features like reclining seats and panoramic sunroof",
    "Fast charging capability"
  ],
  "cons": [
    "Expected high price for an MPV",
    "Limited charging infrastructure in some regions",
    "Large size might be challenging in urban traffic"
  ],
  "mileage": [
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "500 - 600 km (Expected WLTP range)" }
  ],
  "colours": [
    { "name": "Pearl White", "image": "" },
    { "name": "Obsidian Black", "image": "" },
    { "name": "Deep Blue", "image": "" },
    { "name": "Graphite Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Fully Digital Cockpit with AI Integration",
    "Reclining Captain Seats with Massage Function",
    "Panoramic Sunroof",
    "360° Camera with Autonomous Parking",
    "Dual Motor AWD System (High Variant)",
    "Premium Sound System"
  ],
  "reviews": []
},
"Peugeot 2008": {
  "type": "SUV",
  "description": "A compact SUV expected to launch in India in June 2027, offering modern design and advanced features.",
  "image": "",
  "brief": "The Peugeot 2008 is a stylish and compact SUV that blends European design with modern technology, offering a fuel-efficient powertrain and a feature-rich interior.",
  "price": "Expected ₹15 - ₹20 Lakh*",
  "specifications": {
    "Engine": "1.2L Turbo Petrol / 1.5L Diesel (Expected)",
    "Power": "130 - 155 PS (Expected)",
    "Torque": "230 - 300 Nm (Expected)",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "18 - 22 km/l (Expected)",
    "Transmission": "6-speed Manual / 8-speed Automatic",
    "Ground Clearance": "200 mm",
    "Length": "4300 mm",
    "Width": "1770 mm",
    "Height": "1550 mm",
    "Wheelbase": "2605 mm"
  },
  "variants": [
    { "name": "2008 Active", "price": "Expected ₹15 Lakh" },
    { "name": "2008 Allure", "price": "Expected ₹17 Lakh" },
    { "name": "2008 GT Line", "price": "Expected ₹20 Lakh" }
  ],
  "pros": [
    "Stylish and modern European design",
    "Efficient turbocharged engine options",
    "High ground clearance for Indian roads",
    "Feature-rich cabin with digital displays",
    "Strong safety features"
  ],
  "cons": [
    "Limited service network in India",
    "Unknown brand presence compared to rivals",
    "Premium pricing compared to competitors"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18 - 20 km/l (Expected)" },
    { "fuelType": "Diesel", "transmission": "Automatic", "mileage": "20 - 22 km/l (Expected)" }
  ],
  "colours": [
    { "name": "Fusion Orange", "image": "" },
    { "name": "Vertigo Blue", "image": "" },
    { "name": "Nimbus Grey", "image": "" },
    { "name": "Pearl White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Peugeot i-Cockpit with 3D Digital Instrument Cluster",
    "LED Matrix Headlights",
    "Panoramic Sunroof",
    "Advanced Driver Assistance Systems",
    "Wireless Charging and Connected Car Tech",
    "Premium Sound System"
  ],
  "reviews": []
},
"Fiat Punto": {
  "type": "Hatchback",
  "description": "A compact hatchback known for its Italian design and efficient performance.",
  "image": "",
  "brief": "The Fiat Punto is a stylish and well-built hatchback that combines European design with a robust engine lineup, making it a practical and fun-to-drive car.",
  "price": "₹5 - ₹8 Lakh* (Discontinued)",
  "specifications": {
    "Engine": "1.2L Petrol / 1.3L Multijet Diesel",
    "Power": "68 - 93 PS",
    "Torque": "96 - 209 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "17 - 21 km/l",
    "Transmission": "5-speed Manual",
    "Ground Clearance": "185 mm",
    "Length": "3989 mm",
    "Width": "1687 mm",
    "Height": "1525 mm",
    "Wheelbase": "2510 mm"
  },
  "variants": [
    { "name": "Punto Active", "price": "₹5 Lakh" },
    { "name": "Punto Dynamic", "price": "₹6.5 Lakh" },
    { "name": "Punto Emotion", "price": "₹8 Lakh" }
  ],
  "pros": [
    "Solid build quality",
    "Stylish Italian design",
    "Good ride and handling balance",
    "Efficient diesel engine",
    "Spacious and comfortable cabin"
  ],
  "cons": [
    "Outdated interior design",
    "Limited service network in India",
    "No automatic transmission option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "17 km/l" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "21 km/l" }
  ],
  "colours": [
    { "name": "Exotica Red", "image": "" },
    { "name": "Hip Hop Black", "image": "" },
    { "name": "Magnesio Grey", "image": "" },
    { "name": "Minimal Grey", "image": "" },
    { "name": "Pearl White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Blue&Me Voice Command System",
    "ABS with EBD",
    "Dual Front Airbags",
    "Steering Mounted Controls",
    "Rear Parking Sensors",
    "Automatic Climate Control"
  ],
  "reviews": []
},
"Fiat Linea": {
  "type": "Sedan",
  "description": "A mid-size sedan offering a blend of comfort and style.",
  "image": "",
  "brief": "The Fiat Linea is an elegant mid-size sedan known for its solid build quality, comfortable ride, and premium features, making it a stylish and practical choice.",
  "price": "₹7.82 - ₹10.76 Lakh* (Discontinued)",
  "specifications": {
    "Engine": "1.4L Petrol / 1.3L Multijet Diesel",
    "Power": "89 - 125 PS",
    "Torque": "115 - 210 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "15 - 20 km/l",
    "Transmission": "5-speed Manual",
    "Ground Clearance": "185 mm",
    "Length": "4596 mm",
    "Width": "1730 mm",
    "Height": "1487 mm",
    "Wheelbase": "2603 mm"
  },
  "variants": [
    { "name": "Linea Active", "price": "₹7.82 Lakh" },
    { "name": "Linea Dynamic", "price": "₹9.32 Lakh" },
    { "name": "Linea Emotion", "price": "₹10.76 Lakh" }
  ],
  "pros": [
    "Elegant Italian design",
    "Strong build quality",
    "Spacious and comfortable cabin",
    "Good ride and handling",
    "Efficient diesel engine"
  ],
  "cons": [
    "Outdated interior design",
    "Limited service network in India",
    "No automatic transmission option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "15 km/l" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "20 km/l" }
  ],
  "colours": [
    { "name": "Hip Hop Black", "image": "" },
    { "name": "Pearl White", "image": "" },
    { "name": "Tuscan Wine", "image": "" },
    { "name": "Minimal Grey", "image": "" },
    { "name": "Magnesio Grey", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Touchscreen Infotainment System",
    "Dual Front Airbags",
    "ABS with EBD",
    "Steering Mounted Controls",
    "Automatic Climate Control",
    "Rear Parking Sensors"
  ],
  "reviews": []
},
"Fiat Avventura": {
  "type": "Crossover",
  "description": "A crossover SUV with rugged styling and versatile features.",
  "image": "",
  "brief": "The Fiat Avventura is a sporty and rugged crossover designed for urban explorers. It offers a unique combination of SUV-like styling, high ground clearance, and a fun-to-drive experience.",
  "price": "₹6.89 - ₹9.94 Lakh* (Discontinued)",
  "specifications": {
    "Engine": "1.4L Petrol / 1.3L Multijet Diesel",
    "Power": "90 - 93 PS",
    "Torque": "115 - 209 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "14 - 20 km/l",
    "Transmission": "5-speed Manual",
    "Ground Clearance": "205 mm",
    "Length": "3989 mm",
    "Width": "1706 mm",
    "Height": "1542 mm",
    "Wheelbase": "2510 mm"
  },
  "variants": [
    { "name": "Avventura Active", "price": "₹6.89 Lakh" },
    { "name": "Avventura Dynamic", "price": "₹8.35 Lakh" },
    { "name": "Avventura Emotion", "price": "₹9.94 Lakh" }
  ],
  "pros": [
    "Distinctive SUV-like styling",
    "High ground clearance for rough roads",
    "Good diesel engine performance",
    "Spacious and comfortable cabin",
    "Tough build quality"
  ],
  "cons": [
    "Lack of automatic transmission",
    "Limited service network",
    "Heavy steering in city traffic"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "14 km/l" },
    { "fuelType": "Diesel", "transmission": "Manual", "mileage": "20 km/l" }
  ],
  "colours": [
    { "name": "Zafferano Orange", "image": "" },
    { "name": "Minimal Grey", "image": "" },
    { "name": "Exotica Red", "image": "" },
    { "name": "Bronzo Tan", "image": "" },
    { "name": "Pearl White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Projector Headlamps",
    "Dual Front Airbags",
    "ABS with EBD",
    "Rear Spare Wheel Mount",
    "Touchscreen Infotainment System",
    "Automatic Climate Control"
  ],
  "reviews": []
},
"Fiat 500": {
  "type": "Hatchback",
  "description": "A premium hatchback with iconic design and advanced features.",
  "image": "",
  "brief": "The Fiat 500 is a stylish and compact city car that blends retro design with modern technology. It offers a premium feel, fuel efficiency, and an engaging driving experience.",
  "price": "₹14 - ₹15 Lakh* (Expected)",
  "specifications": {
    "Engine": "1.4L Petrol / Electric",
    "Power": "69 - 118 PS",
    "Torque": "92 - 220 Nm",
    "Seating Capacity": "4",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "19 - 24 km/l (Petrol) / 320 km range (Electric)",
    "Transmission": "5-speed Manual / CVT / Single-speed Auto (EV)",
    "Ground Clearance": "120 mm",
    "Length": "3571 mm",
    "Width": "1627 mm",
    "Height": "1488 mm",
    "Wheelbase": "2300 mm"
  },
  "variants": [
    { "name": "500 Lounge", "price": "₹14 Lakh" },
    { "name": "500C Convertible", "price": "₹15 Lakh" },
    { "name": "500 Electric", "price": "₹15 Lakh (Expected)" }
  ],
  "pros": [
    "Iconic retro-modern design",
    "Compact size for city driving",
    "Efficient engine and EV option",
    "Premium interior feel",
    "Easy maneuverability"
  ],
  "cons": [
    "Limited rear-seat space",
    "Expensive for a small car",
    "Low ground clearance"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "19 km/l" },
    { "fuelType": "Electric", "transmission": "Automatic", "mileage": "320 km range" }
  ],
  "colours": [
    { "name": "Gelato White", "image": "" },
    { "name": "Passione Red", "image": "" },
    { "name": "Electronica Blue", "image": "" },
    { "name": "Pompei Grey", "image": "" },
    { "name": "Bossa Nova White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment",
    "Apple CarPlay & Android Auto",
    "Rear Parking Sensors",
    "LED Headlamps",
    "Panoramic Sunroof (optional)",
    "Keyless Entry & Push Start"
  ],
  "reviews": []
},
"Datsun redi-GO": {
  "type": "Hatchback",
  "description": "A compact hatchback known for its stylish design and efficient performance.",
  "image": "",
  "brief": "The Datsun redi-GO is a budget-friendly urban hatchback with a high ground clearance, fuel-efficient engine, and a stylish, youthful design.",
  "price": "₹3.98 - ₹4.96 Lakh*",
  "specifications": {
    "Engine": "0.8L / 1.0L Petrol",
    "Power": "54 - 68 PS",
    "Torque": "72 - 91 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "20.71 - 22 km/l",
    "Transmission": "5-speed Manual / AMT",
    "Ground Clearance": "187 mm",
    "Length": "3435 mm",
    "Width": "1574 mm",
    "Height": "1546 mm",
    "Wheelbase": "2348 mm"
  },
  "variants": [
    { "name": "redi-GO 0.8 D", "price": "₹3.98 Lakh" },
    { "name": "redi-GO 1.0 T(O)", "price": "₹4.96 Lakh" }
  ],
  "pros": [
    "Affordable price point",
    "Good ground clearance for city roads",
    "Fuel-efficient engine",
    "Compact dimensions for easy parking",
    "Modern styling with LED DRLs"
  ],
  "cons": [
    "Basic safety features",
    "Limited cabin space",
    "No diesel or CNG option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "22 km/l" },
    { "fuelType": "Petrol", "transmission": "AMT", "mileage": "20.71 km/l" }
  ],
  "colours": [
    { "name": "Vivid Blue", "image": "" },
    { "name": "Ruby Red", "image": "" },
    { "name": "Bronze Grey", "image": "" },
    { "name": "Crystal White", "image": "" },
    { "name": "Opal White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "Dual-tone Dashboard",
    "8-inch Touchscreen Infotainment",
    "Apple CarPlay & Android Auto",
    "LED DRLs & Fog Lamps",
    "ABS with EBD",
    "Rear Parking Sensors"
  ],
  "reviews": []
},
"Datsun GO": {
  "type": "Hatchback",
  "description": "A compact hatchback offering a blend of comfort and style.",
  "image": "",
  "brief": "The Datsun GO is a feature-packed hatchback offering a stylish design, fuel efficiency, and modern technology for an affordable price.",
  "price": "₹4.02 - ₹6.51 Lakh*",
  "specifications": {
    "Engine": "1.2L Petrol",
    "Power": "68 - 77 PS",
    "Torque": "104 Nm",
    "Seating Capacity": "5",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "19.59 - 20.63 km/l",
    "Transmission": "5-speed Manual / CVT",
    "Ground Clearance": "180 mm",
    "Length": "3788 mm",
    "Width": "1636 mm",
    "Height": "1507 mm",
    "Wheelbase": "2450 mm"
  },
  "variants": [
    { "name": "GO D", "price": "₹4.02 Lakh" },
    { "name": "GO T CVT", "price": "₹6.51 Lakh" }
  ],
  "pros": [
    "Spacious and practical cabin",
    "Fuel-efficient petrol engine",
    "CVT option for smooth driving",
    "7-inch touchscreen infotainment",
    "Affordable pricing"
  ],
  "cons": [
    "Lacks premium features",
    "No diesel or CNG option",
    "Limited service network"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "19.59 km/l" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "20.63 km/l" }
  ],
  "colours": [
    { "name": "Ruby Red", "image": "" },
    { "name": "Amber Orange", "image": "" },
    { "name": "Crystal Silver", "image": "" },
    { "name": "Vivid Blue", "image": "" },
    { "name": "Opal White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment",
    "Apple CarPlay & Android Auto",
    "Dual Airbags",
    "ABS with EBD & Brake Assist",
    "Follow Me Home Headlamps",
    "Reverse Parking Sensors"
  ],
  "reviews": []
},
"Datsun GO Plus": {
  "type": "Crossover",
  "description": "A crossover SUV with rugged styling and versatile features.",
  "image": "",
  "brief": "The Datsun GO Plus is a versatile and affordable MPV offering a spacious 7-seater cabin, fuel-efficient performance, and modern features.",
  "price": "₹4.26 - ₹7.00 Lakh*",
  "specifications": {
    "Engine": "1.2L Petrol",
    "Power": "68 - 77 PS",
    "Torque": "104 Nm",
    "Seating Capacity": "7",
    "Drive Type": "Front Wheel Drive",
    "Fuel Efficiency": "18.57 - 19.02 km/l",
    "Transmission": "5-speed Manual / CVT",
    "Ground Clearance": "180 mm",
    "Length": "3995 mm",
    "Width": "1636 mm",
    "Height": "1507 mm",
    "Wheelbase": "2450 mm"
  },
  "variants": [
    { "name": "GO Plus D", "price": "₹4.26 Lakh" },
    { "name": "GO Plus T CVT", "price": "₹7.00 Lakh" }
  ],
  "pros": [
    "Affordable 7-seater option",
    "Compact dimensions for city driving",
    "Fuel-efficient petrol engine",
    "CVT option for smooth driving",
    "Decent boot space with third-row folded"
  ],
  "cons": [
    "Limited features compared to rivals",
    "Third-row seating best for kids",
    "No diesel or CNG option"
  ],
  "mileage": [
    { "fuelType": "Petrol", "transmission": "Manual", "mileage": "18.57 km/l" },
    { "fuelType": "Petrol", "transmission": "CVT", "mileage": "19.02 km/l" }
  ],
  "colours": [
    { "name": "Ruby Red", "image": "" },
    { "name": "Amber Orange", "image": "" },
    { "name": "Crystal Silver", "image": "" },
    { "name": "Vivid Blue", "image": "" },
    { "name": "Opal White", "image": "" }
  ],
  "exteriorImages": [],
  "interiorImages": [],
  "topFeatures": [
    "7-inch Touchscreen Infotainment",
    "Apple CarPlay & Android Auto",
    "Dual Airbags",
    "ABS with EBD & Brake Assist",
    "Rear Parking Sensors",
    "Follow Me Home Headlamps"
  ],
  "reviews": []
},



















































































      
      

  









        
    
      
      

  

















  
  




































    };

    return carData[modelName] || null;
}

function addReview(modelName, review) {
    const carDetails = getCarDetails(modelName);
    if (carDetails) {
        carDetails.reviews.push(review);
        localStorage.setItem(modelName, JSON.stringify(carDetails.reviews));
    }
}

function loadReviews(modelName) {
    const reviews = JSON.parse(localStorage.getItem(modelName)) || [];
    const carDetails = getCarDetails(modelName);
    if (carDetails) {
        carDetails.reviews = reviews;
    }
}

function displayReviews(carDetails) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = ''; // Clear previous reviews
    carDetails.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${review.name}</h3>
            <p>Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
            <p>${review.description}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Example usage
const carDetails = getCarDetails("Toyota Fortuner");
console.log(carDetails);

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelName = urlParams.get('model');
    loadReviews(modelName);
    const carDetails = getCarDetails(modelName);

    if (carDetails) {
        // Display colours
        const coloursDescription = document.getElementById('colours-description');
        coloursDescription.textContent = `${modelName} is available in the following colours in India.`;

        const coloursSelection = document.getElementById('colours-selection');
        const colourImage = document.getElementById('colour-image');

        carDetails.colours.forEach((colour, index) => {
            const colourButton = document.createElement('button');
            colourButton.textContent = colour.name;
            colourButton.classList.add('colour-button');
            if (index === 0) {
                colourButton.classList.add('active');
                colourImage.src = colour.image;
            }
            colourButton.addEventListener('click', () => {
                document.querySelectorAll('.colour-button').forEach(btn => btn.classList.remove('active'));
                colourButton.classList.add('active');
                colourImage.src = colour.image;
            });
            coloursSelection.appendChild(colourButton);
        });

         // Display exterior images
         const exteriorImages = carDetails.exteriorImages || [];
         const exteriorImagesContainer = document.getElementById('exterior-images');
         exteriorImages.slice(0, 6).forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
             exteriorImagesContainer.appendChild(imgElement);
         });

         // Display interior images
         const interiorImages = carDetails.interiorImages || [];
         const interiorImagesContainer = document.getElementById('interior-images');
         interiorImages.slice(0, 6).forEach(image => {
             const imgElement = document.createElement('img');
             imgElement.src = image;
             interiorImagesContainer.appendChild(imgElement);
         });

        // Display top features
        const featuresContent = document.getElementById('features-content');
        const featuresList = document.createElement('ul');
        carDetails.topFeatures.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = `✔ ${feature}`;
            featuresList.appendChild(featureItem);
        });
        featuresContent.appendChild(featuresList);

        // Display reviews
        displayReviews(carDetails);

        // Handle review form submission
        const reviewForm = document.getElementById('review-form');
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('review-name').value;
            const rating = document.getElementById('review-rating').value;
            const description = document.getElementById('review-description').value;
            const review = { name, rating: parseInt(rating), description };
            addReview(modelName, review);
            displayReviews(carDetails); // Display the new review
            reviewForm.reset(); // Reset the form
        });
    } else {
        document.getElementById('model-details').textContent = 'Car model not found.';
    }
});
