statuses = ['Stories', 'To Do', 'In Progress', 'Testing', 'Done']
colors = ['Pink', 'Blue', 'Yellow']

100.times do
  Item.create(
    title: Faker::App.name,
    details: Faker::Lorem.paragraph(4),
    status: statuses.sample,
    priority: [*1..100].sample,
    color: colors.sample
  )
end
