alias Instagram.{Posts, Repo}


mock_photos = 9

photos_list = [
	"https://images.pexels.com/photos/1025990/pexels-photo-1025990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/67386/pexels-photo-67386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/804410/pexels-photo-804410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]

# Photos
for idx <- 0..mock_photos do
  photo = %{
    image_url: Enum.at(photos_list, idx),
    caption: Faker.Lorem.Shakespeare.hamlet
  }

  %Posts.Photo{}
  |> Posts.Photo.changeset(photo)
  |> Repo.insert!
end

