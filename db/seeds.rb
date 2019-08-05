# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
Genre.destroy_all

User.create!(email: "henry@gmail.com", password:"asdf1234")
User.create!(email: "danieldog@gmail.com", password:"asdf1234")
User.create!(email: "lillian@gmail.com", password:"lillian")
User.create!(email: "george@gmail.com", password:"asdf1234")
User.create!(email: "max@gmail.com", password:"12345678")
User.create!(email:"demoLogin@gmail.com" ,password:"asdf1234")

# chickenLittle = Video.create(title:"Chicken Little", description:"No one believes Chicken Little when he tried to warn of an alien invasion -- so it's up to him and his misfit friends to save the world!", year:"2005", genre_id:1)
# chickenLittle.photo.attach(io: File.open("/Users/henry/Desktop/fullstack/henflix/app/assets/images/chicken_little.jpg"))
# chickenLittle.video_url.attach(io:)

angryBird = Video.create!(title:"The Angry Birds Movie 2", description:"Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine way of life. After picking their best and brightest, the birds and pigs come up with a scheme to infiltrate the island, deactivate the device and return to their respective paradises intact.", year:"2019", genre_id:1)
photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/the_angry_birds_movie.jpg")
video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/angry_birds_2.mp4")
angryBird.photo.attach(io: photo,  filename:"angry_birds_2.jpg")
angryBird.video_url.attach(io: video, filename:"angry_birds_2.mp4")




rio = Video.create!(title:"Rio", description:"In Brazil, various exotic birds are smuggled out of the country. In Moose Lake, Minnesota, a crate with a male Spix's macaw hatchling falls out of a truck and is found by a little girl named Linda Gunderson, who names him Blu. Over the next 15 years,[7] Linda comes to own a bookstore. Highly domesticated and unable to fly because he is scared to, Blu is ridiculed frequently by the Canada geese that come by outside of Linda's bookstore.
One day, ornithologist Túlio Monteiro invites Blu and Linda to Rio de Janeiro because Blu, who is the last known male of his species, needs to mate with the last known female macaw. Linda initially refuses, but later accepts and they fly to Rio. At Túlio's aviary, Blu meets Jewel, a fiercely independent Spix's macaw female longing to flee back to the wilderness. The macaws are captured by Fernando, an orphaned boy, and a sulphur-crested cockatoo named Nigel, both of whom work for a group of smugglers led by Marcel, who wants to leave the country as soon as possible to secure a black market deal regarding Blu and Jewel.
While Fernando has second thoughts about his actions, Nigel tells the macaws that he desires to exact revenge on 'pretty birds' after his role on a television program had been ruined by one. However, because of Blu's familiarity with cages, they flee into the jungle. Fernando meets Linda and Túlio and helps them find the birds, while Blu and Jewel meet Rafael, a toco toucan, who offers to take them to his bulldog friend, Luiz, to remove their leg chain.", 
year:"2011", genre_id:1)
rio_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/rio.jpg")
rio_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/rio.mp4")
rio.photo.attach(io: rio_photo, filename:"rio.jpg")
rio.video_url.attach(io: rio_video, filename:"rio.mp4")






Genre.create(genre:"Animation")
# Genre.create(genre:"") 
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")
