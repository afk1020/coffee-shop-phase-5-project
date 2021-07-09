# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
User.destroy_all

# coffee_types = ["Arabica", "Robusta", "Liberica", "Excelsa"]

puts '🌱 Seeding coffees...'


    Product.create(name: "Arabica", price: 9, description: "sweet and delicate flavor", quantity: 50, image_url: "https://sc04.alicdn.com/kf/UTB8wkWhBGrFXKJk43Ovq6ybnpXas.jpg" )
    Product.create(name: "Robusta", price: 7, description: "strong and harsh flavor profile", quantity: 50, image_url: "https://1kczi73sfs1d3t3z4i1ys5mf-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg")
    Product.create(name: "Liberica", price: 12, description: "fruity and woody flavor", quantity: 20, image_url: "https://sc04.alicdn.com/kf/UTB884cHm22JXKJkSanrq6y3lVXaI.jpg")
    Product.create(name: "Excelsa", price: 20,  description: "tart and fruity flavor", quantity: 15, image_url: "https://images-na.ssl-images-amazon.com/images/I/51EGHd7Io-L._AC_SY580_.jpg")

puts '✅ Done seeding'