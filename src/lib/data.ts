// src/lib/data.ts

export const ERAS_DATA: any = {
  // ============================================================
  // KỶ NGUYÊN: QUÁ KHỨ (Nguồn gốc giai cấp & Dân tộc)
  // ============================================================
  "qua-khu": {
    title: "Nguồn Gốc Lịch Sử",
    // Ảnh nền: Bản đồ cổ / Giấy cũ
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop",
    stories: [
      {
        id: "nguon-goc-giai-cap",
        title: "Sự Xuất Hiện Giai Cấp",
        subtitle: "Từ 'Làm chung' đến 'Tư hữu'",
        description: "Vì sao con người từ chỗ bình đẳng lại trở nên phân hóa giàu nghèo?",
        top: "40%", left: "20%",
        content: {
          slides: [
            { 
              text: "Ngày xưa, trong xã hội cộng sản nguyên thủy, con người sống theo thị tộc giữa thiên nhiên hoang sơ. Mọi người lao động cùng nhau để săn bắt, hái lượm và chia sẻ sản phẩm gần như ngang nhau.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/xa-hoi-thi-toc-va-cong-xa-thi-toc-mau-he.jpg" // Ảnh bộ lạc/rừng
            },
            { 
              text: "Khi công cụ còn thô sơ, làm ra bao nhiêu ăn bấy nhiêu, chưa có điều kiện để ai tích lũy. Nhưng khi công cụ kim loại xuất hiện, năng suất tăng vọt, xã hội bắt đầu có 'của dư'.", 
              image: "https://dolavn.vn/wp-content/uploads/2018/10/Ky-nguyen-san-ban.jpg" // Ảnh công cụ đồng/sắt
            },
            { 
              text: "Từ đây nảy sinh việc giữ lại phần tốt hơn cho bản thân. Những người có uy tín hoặc chức vụ bắt đầu chiếm giữ nhiều hơn, dần dần hình thành tư hữu và sự phân hóa giàu – nghèo.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/xa-hoi-chiem-huu-no-le-va-che-do-tu-huu-xuat-hien.jpg" // Ảnh rương kho báu/tài sản
            },
            { 
              // SLIDE CUỐI CÙNG LÀ KẾT LUẬN
              text: "Kết luận: Giai cấp ra đời không phải do ý muốn chủ quan, mà là kết quả của sự phát triển sản xuất: khi tư hữu về tư liệu sản xuất xuất hiện, xã hội bắt đầu phân hóa.", 
              image: "https://luatduonggia.vn/wp-content/uploads/2024/08/chuyen-bien-cua-nguoi-nguyen-thuy-sau-khi-kim-loai-xuat-hien.jpg" // Ảnh trừu tượng phân chia
            }
          ],
          quizzes: [
            {
              question: "Khi xã hội đã có “của dư”, liệu mọi người có thể mãi bình đẳng như trước không?",
              options: [
                "Có, nếu mọi người tự nguyện",
                "Không, sự xuất hiện của tư hữu sẽ dẫn đến phân hóa giai cấp",
                "Có, vì luật pháp ngăn cấm",
                "Không, vì thần linh không cho phép"
              ],
              correctIndex: 1,
              explanation: "Của dư tạo cơ sở vật chất cho chế độ tư hữu, và tư hữu chính là nguồn gốc sâu xa của sự phân chia giai cấp."
            }
          ]
        }
      },
      {
        id: "mau-thuan-chu-no",
        title: "Mâu Thuẫn Đối Kháng",
        subtitle: "Chủ nô & Nô lệ",
        description: "Khi con người bị biến thành công cụ biết nói, đấu tranh là tất yếu.",
        top: "30%", left: "50%",
        content: {
          slides: [
            { 
              text: "Trong xã hội chiếm hữu nô lệ, chủ nô sở hữu ruộng đất và cả người lao động. Nô lệ bị ép làm việc nặng nhọc nhưng thành quả lại thuộc về chủ nô.", 
              image: "https://phaptri.vn/upload_images/images/2023/11/05/che-do-no-le-06.png" // Ảnh xiềng xích
            },
            { 
              text: "Có những ngày, nô lệ làm việc từ sáng đến tối nhưng vẫn không được coi là con người đúng nghĩa. Sự chịu đựng có giới hạn, họ tìm cách bỏ trốn, phá hoại công cụ hoặc đứng lên chống lại.", 
              image: "https://lh5.googleusercontent.com/proxy/Def7si19cg3_FnQgROsRQY4UfDmBBT99S1O4lHflGXgTAOJNurv8PTcAnS1YZ2TUyustZo3cVrxs8B906dcL827YSAiVeyi50sFHPjJlTQP7dl_A" // Ảnh lao động khổ sai
            },
            { 
              text: "Chủ nô đáp trả bằng bạo lực để duy trì quyền lực. Một bên muốn duy trì sự thống trị, một bên muốn quyền sống. Xung đột là điều không thể tránh khỏi.", 
              image: "https://media.istockphoto.com/id/157479463/vi/vec-to/n%C3%B4-l%E1%BB%87-da-%C4%91en-ch%E1%BA%A5t-%C4%91%E1%BA%A7y-tr%C3%AAn-t%C3%A0u-1881.jpg?s=612x612&w=0&k=20&c=R8O5ksAgVNVnU892ZKb-35C0xuL8sY6hWVWzt0lyOPw=" // Ảnh cung điện vs ngục tối
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Trong xã hội có bóc lột, xung đột lợi ích là không tránh khỏi. Đấu tranh giai cấp xuất hiện như một phản ứng tất yếu để chống lại sự thống trị và đòi quyền sống.", 
              image: "https://redsvn.net/wp-content/uploads/2019/01/History+Of+Slavery+In+Louisiana+-+New+Orleans+Slave+Market-742486.png" // Ảnh ngọn lửa đấu tranh
            }
          ],
          quizzes: [
            {
              question: "Khi một bên sống sung túc nhờ chiếm đoạt sức lao động của bên còn lại, liệu mâu thuẫn có thể tự biến mất không?",
              options: [
                "Có, nếu chủ nô đối xử tốt hơn một chút",
                "Có, thời gian sẽ xóa nhòa tất cả",
                "Không, mâu thuẫn lợi ích cốt lõi vẫn còn đó và sẽ dẫn đến đấu tranh",
                "Không, trừ khi nô lệ chấp nhận số phận hoàn toàn"
              ],
              correctIndex: 2,
              explanation: "Mâu thuẫn này mang tính đối kháng về lợi ích kinh tế, không thể tự mất đi nếu quan hệ bóc lột còn tồn tại."
            }
          ]
        }
      },
      {
        id: "hinh-thanh-dan-toc",
        title: "Sự Hình Thành Dân Tộc",
        subtitle: "Cộng đồng cùng lịch sử",
        description: "Từ những bộ lạc nhỏ bé đến một quốc gia thống nhất.",
        top: "65%", left: "75%",
        content: {
          slides: [
            { 
              text: "Ban đầu con người sống trong các cộng đồng nhỏ như thị tộc, rồi liên kết thành bộ lạc. Nhưng khi xã hội phát triển và giai cấp xuất hiện, nhu cầu liên kết lớn hơn nảy sinh.", 
              image: "https://img.loigiaihay.com/picture/2021/0921/4.jpg" // Ảnh bản đồ bộ lạc
            },
            { 
              text: "Nhiều bộ lạc liên kết lại thành bộ tộc với lãnh thổ ổn định và tổ chức quản lý rõ hơn. Đời sống kinh tế mở rộng, ngôn ngữ và văn hóa chung dần trở nên mạnh mẽ.", 
              image: "https://api.toploigiai.vn/storage/uploads/thi-toc-la-gi_2" // Ảnh văn hóa/cờ
            },
            { 
              text: "Cộng đồng người dần phát triển thành Dân tộc – một hình thức cộng đồng ổn định, gắn bó lâu dài trong lịch sử về kinh tế, lãnh thổ, văn hóa và tâm lý.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/nha-nuoc-ra-doi-nhu-the-nao.jpg" // Ảnh đoàn kết
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Dân tộc hình thành không phải ngẫu nhiên, mà là kết quả của quá trình phát triển lịch sử khi kinh tế, lãnh thổ, văn hóa và tổ chức xã hội đạt tới mức ổn định.", 
              image: "https://haylamdo.com/lich-su-6-ket-noi/images/ly-thuyet-bai-5-xa-hoi-nguyen-thuy-80091.png" // Ảnh đám đông/quốc gia
            }
          ],
          quizzes: [
            {
              question: "Vì sao càng phát triển, con người càng có xu hướng liên kết trong những cộng đồng lớn hơn (như dân tộc)?",
              options: [
                "Để dễ dàng đi du lịch",
                "Do nhu cầu phát triển kinh tế, bảo vệ lãnh thổ và văn hóa chung",
                "Do sở thích cá nhân",
                "Do ngẫu nhiên"
              ],
              correctIndex: 1,
              explanation: "Sự phát triển sản xuất và nhu cầu bảo vệ lãnh thổ đòi hỏi sự liên kết chặt chẽ và quy mô lớn hơn các bộ lạc nhỏ lẻ."
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // KỶ NGUYÊN: HIỆN TẠI (Giai cấp & Dân tộc hôm nay)
  // ============================================================
  "hien-tai": {
    title: "Xã Hội Đương Đại",
    // Ảnh nền: Thành phố vệ tinh / Hiện đại
    mapImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop",
    stories: [
      {
        id: "mau-thuan-lao-dong",
        title: "Lợi Ích Trong Lao Động",
        subtitle: "Người làm công & Người sở hữu",
        description: "Khi doanh thu tăng nhưng lương không tăng, điều gì sẽ xảy ra?",
        top: "40%", left: "30%",
        content: {
          slides: [
            { 
              text: "Một công ty mở rộng sản xuất, doanh thu và lợi nhuận tăng cao. Tuy nhiên, người lao động phải tăng ca nhiều hơn, áp lực lớn hơn, trong khi mức lương chỉ nhích nhẹ.", 
              image: "https://media.vneconomy.vn/images/upload/2025/04/13/photo1630405678900-1630405678983360611892.jpg" // Ảnh nhà máy
            },
            { 
              text: "Người lao động bắt đầu đề nghị cải thiện thu nhập. Phía quản lý giải thích rằng thị trường cạnh tranh, chi phí tăng nên chưa thể tăng lương mạnh.", 
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200" // Ảnh cuộc họp
            },
            { 
              text: "Hai bên đều có lý do, nhưng đằng sau đó là sự khác nhau về lợi ích và vị trí trong quan hệ sản xuất. Một bên muốn tối đa lợi nhuận, một bên muốn đảm bảo đời sống.", 
              image: "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2025/04/16/financial-stress-tile-1--38443951816629927653625.jpg" // Ảnh biểu đồ tiền
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Trong xã hội còn phân hóa về sở hữu, mâu thuẫn lợi ích vẫn tồn tại. Cần cơ chế hợp lý để điều hòa lợi ích và bảo vệ người lao động, hạn chế bất công kéo dài.", 
              image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200" // Ảnh bắt tay
            }
          ],
          quizzes: [
            {
              question: "Nếu năng suất và lợi nhuận tăng mà đời sống người lao động không cải thiện tương ứng, mâu thuẫn sẽ đi về đâu?",
              options: [
                "Người lao động sẽ chấp nhận vì công ty là trên hết",
                "Mâu thuẫn sẽ tích tụ và dẫn đến tranh chấp lao động hoặc đình công",
                "Công ty sẽ tự động tăng lương vào năm sau",
                "Không có chuyện gì xảy ra"
              ],
              correctIndex: 1,
              explanation: "Sự mất cân bằng trong phân phối lợi ích là nguyên nhân chính dẫn đến các xung đột lao động."
            }
          ]
        }
      },
      {
        id: "giai-phong-dan-toc",
        title: "Giải Phóng Dân Tộc",
        subtitle: "Độc lập là tiền đề",
        description: "Khi dân tộc bị áp bức, nhiệm vụ nào là cấp bách nhất?",
        top: "60%", left: "65%",
        content: {
          slides: [
            { 
              text: "Hãy hình dung một đất nước bị ngoại bang thống trị: tài nguyên bị khai thác cạn kiệt, quyền tự quyết bị tước đoạt, đời sống nhân dân vô cùng khó khăn.", 
              image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/French_capture_of_Danang_1858.jpg" // Ảnh cờ rách/dây thép gai
            },
            { 
              text: "Người lao động vừa chịu áp bức về kinh tế, vừa mất quyền làm chủ đất nước. Lúc này, muốn thay đổi xã hội theo hướng tiến bộ, trước hết phải giành lại Độc lập.", 
              image: "https://thuviennguyenvanhuong.vn/wp-content/uploads/2023/08/LE-KY-HOA-UOC-NHAM-TUAT-1862-tai-SAIGON-.jpg" // Ảnh biểu tình/đấu tranh
            },
            { 
              text: "Nếu đất nước chưa độc lập, mọi cố gắng cải thiện quyền lợi xã hội đều bị kìm hãm bởi thế lực ngoại bang.", 
              image: "https://i0.wp.com/nghiencuulichsu.com/wp-content/uploads/2016/12/annamese_kowtowing_to_french_soldiers.jpg?fit=1200%2C953&ssl=1" // Ảnh bầu trời tự do
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Trong hoàn cảnh dân tộc bị áp bức, giành độc lập là điều kiện nền tảng. Khi dân tộc độc lập, xã hội mới có cơ hội giải quyết các vấn đề công bằng và tiến bộ lâu dài.", 
              image: "https://images.hcmcpv.org.vn//Uploads/Image/31082021318ABD96/33.jpg" // Ảnh cờ bay phấp phới
            }
          ],
          quizzes: [
            {
              question: "Nếu không có chủ quyền và độc lập, liệu nhân dân có thể tự quyết định con đường phát triển của mình không?",
              options: [
                "Có, nếu ngoại bang cho phép",
                "Không, độc lập chính trị là tiền đề cho tự quyết kinh tế - xã hội",
                "Có, vì kinh tế quan trọng hơn chính trị",
                "Chỉ cần hội nhập là đủ"
              ],
              correctIndex: 1,
              explanation: "Không có độc lập, vận mệnh quốc gia sẽ bị chi phối bởi lợi ích của nước ngoài."
            }
          ]
        }
      },
      {
        id: "doan-ket-dan-toc",
        title: "Đoàn Kết Dân Tộc",
        subtitle: "Lợi ích chung",
        description: "Làm sao đoàn kết khi mỗi người có một lợi ích riêng?",
        top: "75%", left: "25%",
        content: {
          slides: [
            { 
              text: "Trong một quốc gia, cơ cấu xã hội rất đa dạng: có chủ doanh nghiệp, người làm công, tiểu thương, nông dân... Mỗi nhóm có vị trí và lợi ích khác nhau.", 
              image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200" // Ảnh nhiều ngành nghề
            },
            { 
              text: "Khi nhà nước đưa ra chính sách (thuế, trợ cấp, giá cả), mỗi nhóm phản ứng khác nhau. Có lúc lợi ích xung đột gay gắt, dễ tạo ra tranh cãi và chia rẽ xã hội.", 
              image: "https://imgcdn.tapchicongthuong.vn/tcct-media/21/6/25/gia-han-nop-thue-.jpg" // Ảnh tranh luận
            },
            { 
              text: "Vậy làm sao để ổn định? Đoàn kết không có nghĩa là mọi lợi ích giống hệt nhau, mà là cùng hướng về lợi ích tối cao của Quốc gia - Dân tộc.", 
              image: "https://file3.qdnd.vn/data/images/0/2023/04/27/hongthanhctd/chu%20tich%20quoc%20hoi%20vuong%20dinh%20hue%20cung%20doan%20cong%20tac%20da%20toi%20tham%20dong%20vien%20can%20bo%20chien%20si%20dang%20thi%20cong%20du%20an%20san%20bay%20phan%20thiet%2025%203%202023%20anh%20quochoi%20vn.jpeg?dpi=150&quality=100&w=870" // Ảnh nắm tay
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Muốn đoàn kết bền vững cần giải quyết hợp lý các mâu thuẫn lợi ích trong xã hội, tránh để bất công tích tụ, lấy lợi ích chung của dân tộc làm điểm tương đồng.", 
              image: "https://img.baobacninhtv.vn/Medias/2023/02/08/10/20230208101847-15.jpg?w=800&h=354&quality=100" // Ảnh khối thống nhất
            }
          ],
          quizzes: [
            {
              question: "Nếu quyền lợi các giai cấp khác nhau, làm sao để xã hội vẫn giữ được sự ổn định và đoàn kết?",
              options: [
                "Bắt buộc mọi người phải suy nghĩ giống nhau",
                "Giải quyết hài hòa lợi ích và hướng tới mục tiêu chung của dân tộc",
                "Ưu tiên tuyệt đối cho người giàu",
                "Xóa bỏ mọi sự khác biệt"
              ],
              correctIndex: 1,
              explanation: "Đoàn kết thực chất là sự thống nhất trong đa dạng, dựa trên việc xử lý công bằng các lợi ích."
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // KỶ NGUYÊN: TƯƠNG LAI (Dự báo & Xu hướng)
  // ============================================================
  "tuong-lai": {
    title: "Thế Giới Tương Lai",
    // Ảnh nền: Mạng lưới / AI / Kết nối
    mapImage: "https://rgb.vn/wp-content/uploads/2022/08/bjarke-ingels-telosa-city-marc-lore_dezeen_2364_hero_2-1024x576.jpg",
    stories: [
      {
        id: "bat-binh-dang-cong-nghe",
        title: "Bất Bình Đẳng Công Nghệ",
        subtitle: "Ai sở hữu AI?",
        description: "Khi công nghệ trở thành tư liệu sản xuất chính, quyền lực thuộc về ai?",
        top: "30%", left: "20%",
        content: {
          slides: [
            { 
              text: "Trong tương lai gần, AI và Robot tự động hóa nhiều ngành nghề. Một nhóm nhỏ sở hữu nền tảng công nghệ, dữ liệu và vốn đầu tư sẽ giàu lên cực nhanh.", 
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200" // Ảnh Robot
            },
            { 
              text: "Ngược lại, nhiều lao động phổ thông mất việc hoặc bị giảm thu nhập vì máy móc thay thế. Xã hội xuất hiện khoảng cách lớn giữa người 'nắm công nghệ' và người 'chỉ có sức lao động'.", 
              image: "https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1553101916830-KD9QW878USS1CWNBWMO2/image-asset.jpeg" // Ảnh người thất nghiệp
            },
            { 
              text: "Quyền lực kinh tế đang chuyển dịch từ sở hữu đất đai, nhà máy sang sở hữu Dữ liệu và Thuật toán. Mâu thuẫn về phân phối tài sản sẽ mang hình hài mới.", 
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" // Ảnh dữ liệu số
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Khi sản xuất thay đổi mạnh, xã hội dễ phát sinh mâu thuẫn mới về quyền sở hữu. Nếu không có chính sách điều chỉnh kịp thời, chênh lệch giàu nghèo có thể gây bất ổn.", 
              image: "https://vr360.com.vn/uploads/images/vi-du-ve-nha-may-thong-minhh.jpg" // Ảnh cân bằng số
            }
          ],
          quizzes: [
            {
              question: "Khi tư liệu sản xuất chuyển từ máy móc sang công nghệ và dữ liệu, ai sẽ là người quyết định quyền lực kinh tế?",
              options: [
                "Người lao động phổ thông",
                "Chủ sở hữu nền tảng công nghệ, dữ liệu và thuật toán",
                "Máy móc tự quyết định",
                "Không ai cả"
              ],
              correctIndex: 1,
              explanation: "Trong kỷ nguyên số, sở hữu trí tuệ và dữ liệu là yếu tố then chốt tạo ra giá trị và quyền lực."
            }
          ]
        }
      },
      {
        id: "xung-dot-bi-loi-dung",
        title: "Xung Đột Bị Lợi Dụng",
        subtitle: "Bản chất & Hiện tượng",
        description: "Nhận diện mâu thuẫn thật sự đằng sau sự chia rẽ.",
        top: "50%", left: "50%",
        content: {
          slides: [
            { 
              text: "Khi kinh tế suy thoái, thất nghiệp tăng, đời sống khó khăn, tâm lý con người thường muốn tìm 'một đối tượng để đổ lỗi'.", 
              image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1200" // Ảnh đám đông
            },
            { 
              text: "Nếu có lực lượng kích động, xung đột vùng miền hoặc dân tộc có thể bị thổi phồng. Người lao động quay sang tranh cãi, đối đầu nhau một cách mù quáng.", 
              image: "https://eahleo.daklak.gov.vn/uploads/eahleo/tin-tuc/nam2023/thang7/ngay17/etu.png" // Ảnh tranh cãi
            },
            { 
              text: "Trong khi đó, những nguyên nhân sâu xa như bất công phân phối và lợi ích nhóm lại bị bỏ qua. Chúng ta đánh nhau vì hiện tượng mà quên mất bản chất.", 
              image: "https://images2.thanhnien.vn/zoom/1200_630/uploaded/hoangnam/2015_02_09/19a1_UHLX.jpg" // Ảnh che mắt
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Muốn giữ đoàn kết dân tộc, cần nhìn đúng gốc rễ của vấn đề. Khi nguyên nhân kinh tế – xã hội không được xử lý, xung đột dễ bị kích động và kéo dài.", 
              image: "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2023/4/28/avatar1682701500148-1682701500530435853209.jpeg" // Ảnh sự thật/hòa giải
            }
          ],
          quizzes: [
            {
              question: "Làm sao để nhận ra đâu là mâu thuẫn thật sự cần giải quyết, đâu là mâu thuẫn bị thổi phồng?",
              options: [
                "Nghe theo đám đông",
                "Phân tích gốc rễ lợi ích kinh tế - xã hội đằng sau các xung đột",
                "Tin vào tin đồn trên mạng",
                "Đổ lỗi cho người khác"
              ],
              correctIndex: 1,
              explanation: "Chỉ khi nhìn thấy lợi ích kinh tế cốt lõi, ta mới không bị các chiêu trò kích động sắc tộc/tôn giáo đánh lừa."
            }
          ]
        }
      },
      {
        id: "van-de-toan-cau",
        title: "Vấn Đề Toàn Cầu",
        subtitle: "Lợi ích Quốc gia & Nhân loại",
        description: "Khủng hoảng chung nhưng khả năng ứng phó lại bất bình đẳng.",
        top: "70%", left: "80%",
        content: {
          slides: [
            { 
              text: "Một thảm họa khí hậu nghiêm trọng xảy ra: bão lớn, hạn mặn, dịch bệnh lan rộng. Các quốc gia cần hợp tác về tài chính, công nghệ và cứu trợ.", 
              image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200" // Ảnh thiên tai
            },
            { 
              text: "Tuy nhiên, nước giàu thường ưu tiên bảo vệ lợi ích của họ trước. Trong cùng một nước, người giàu có điều kiện di chuyển và bảo vệ bản thân tốt hơn.", 
              image: "https://cacnuoc.vn/wp-content/uploads/2016/11/quatar-top-1-dat-nuoc-giau-nhat-the-gioi.jpg" // Ảnh phân hóa giàu nghèo
            },
            { 
              text: "Người lao động nghèo chịu thiệt hại nặng nề nhất. Bất bình đẳng lộ rõ: cùng một cơn bão, nhưng chiếc thuyền chúng ta ngồi là khác nhau.", 
              image: "https://cdn.nhandan.vn/images/d0ea7e0f3e814877ff4a6ebd4816c4659464d5262df61dedc91b0d3461f350447f606e7fa5b9e94df6037729928b03fa/ndo_br_cho-1576.jpg" // Ảnh thuyền nhỏ vs thuyền lớn
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Các vấn đề nhân loại ngày càng rõ, nhưng cách giải quyết vẫn bị chi phối bởi lợi ích quốc gia và giai cấp. Cần kết hợp hợp tác quốc tế với chính sách công bằng trong nước.", 
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" // Ảnh hợp tác
            }
          ],
          quizzes: [
            {
              question: "Trong khủng hoảng chung của nhân loại, vì sao vẫn có sự chênh lệch lớn trong khả năng tự bảo vệ và hưởng lợi?",
              options: [
                "Do may mắn ngẫu nhiên",
                "Do sự chi phối của lợi ích quốc gia và sự phân hóa giàu nghèo",
                "Do thiên nhiên chọn lọc",
                "Do mọi người không muốn hợp tác"
              ],
              correctIndex: 1,
              explanation: "Lợi ích cục bộ (quốc gia, giai cấp) thường cản trở việc giải quyết triệt để và công bằng các vấn đề toàn cầu."
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // CHƯƠNG ẨN: MINI GAME LẬT HÌNH
  // ============================================================
  // ============================================================
  // CHƯƠNG ẨN: MINI GAME LẬT HÌNH
  // ============================================================
  "hidden": {
    title: "Sự Thật Cuối Cùng",
    // Link ảnh gốc: Pyramid of Capitalist System (1911)
    finalImage: "https://topwar.ru/uploads/posts/2025-11/dfa70f43fd_pyramid_of_capitalist_system.webp", 
    
    // Các từ khóa chấp nhận cho đáp án đúng (Tiếng Việt và Tiếng Anh)
    validAnswers: [
      "chủ nghĩa tư bản", "chu nghia tu ban", 
      "tháp tư bản", "thap tu ban",
      "capitalism", "pyramid of capitalist system"
    ],
    
    // Thông điệp chiến thắng
    victoryMessage: "Chính xác! Đây là 'Tháp Chủ Nghĩa Tư Bản'. Bức tranh cho thấy: Giai cấp lao động ở dưới đáy gánh đỡ toàn bộ cấu trúc xã hội. Nếu họ đứng dậy, tất cả sẽ sụp đổ.",
    
    // 6 Mảnh ghép tương ứng với 6 tầng/ý nghĩa của bức tranh
    pieces: [
      {
        id: 0,
        // Câu hỏi về TẦNG ĐÁY (Công nhân)
        question: "Trong bức tranh, tầng lớp nào nằm dưới cùng và gánh đỡ toàn bộ trọng lượng của xã hội?",
        options: [
          "Vua chúa và quý tộc",
          "Giai cấp công nhân / Người lao động",
          "Tăng lữ",
          "Quân đội"
        ],
        correctIndex: 1 
      },
      {
        id: 1,
        // Câu hỏi về TẦNG 5 (Tư sản ăn uống)
        question: "Nhóm người ngồi ăn uống tiệc tùng với dòng chữ 'We eat for you' (Chúng tôi ăn hộ bạn) phản ánh điều gì?",
        options: [
          "Sự phân phối của cải bất bình đẳng",
          "Tinh thần chia sẻ lương thực",
          "Hội thi ăn uống",
          "Sự thiếu hụt thực phẩm"
        ],
        correctIndex: 0
      },
      {
        id: 2,
        // Câu hỏi về TẦNG 4 (Quân đội)
        question: "Tầng lớp lính tráng có dòng chữ 'We shoot at you' (Chúng tôi bắn vào bạn). Vai trò của họ trong hệ thống này là gì?",
        options: [
          "Bảo vệ người dân lao động",
          "Bảo vệ hòa bình thế giới",
          "Bảo vệ lợi ích của giai cấp thống trị bên trên",
          "Đi săn bắn giải trí"
        ],
        correctIndex: 2
      },
      {
        id: 3,
        // Câu hỏi về TẦNG 3 (Tôn giáo/Tăng lữ)
        question: "Nhóm tăng lữ có dòng chữ 'We fool you' (Chúng tôi lừa mị bạn). Trong bối cảnh bức tranh năm 1911, họ đại diện cho công cụ gì?",
        options: [
          "Khoa học kỹ thuật",
          "Thao túng tư tưởng và tinh thần để người dân cam chịu",
          "Y tế cộng đồng",
          "Giáo dục tiên tiến"
        ],
        correctIndex: 1
      },
      {
        id: 4,
        // Câu hỏi về TẦNG 2 (Vua chúa/Lãnh đạo)
        question: "Nhóm cai trị (We rule you) đứng gần đỉnh tháp. Quyền lực của họ phụ thuộc vào đâu?",
        options: [
          "Sự ủng hộ của người dân",
          "Sự nâng đỡ của tầng lớp bên dưới và tiền bạc từ bên trên",
          "Tài năng thiên bẩm",
          "Sự may mắn ngẫu nhiên"
        ],
        correctIndex: 1
      },
      {
        id: 5,
        // Câu hỏi về ĐỈNH CHÓP (Túi tiền)
        question: "Trên đỉnh cao nhất của kim tự tháp là một túi tiền khổng lồ ($). Nó tượng trưng cho điều gì?",
        options: [
          "Sự thịnh vượng chung cho mọi người",
          "Chủ nghĩa Tư bản (Capitalism) và sự thống trị của đồng tiền",
          "Quỹ từ thiện",
          "Phần thưởng cho người chăm chỉ"
        ],
        correctIndex: 1
      }
    ]
  }
};