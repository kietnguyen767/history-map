// src/lib/data.ts

export const ERAS_DATA: any = {
  // ============================================================
  // KỶ NGUYÊN: QUÁ KHỨ (Nguồn gốc giai cấp & Dân tộc)
  // ============================================================
  "qua-khu": {
    title: "Nguồn Gốc Lịch Sử",
    // Ảnh nền: Bản đồ cổ / Hang động / Di chỉ
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop",
    stories: [
      {
        id: "nguon-goc-giai-cap",
        title: "Sự Xuất Hiện Giai Cấp",
        subtitle: "Từ 'Làm chung' đến 'Tư hữu'",
        description: "Vì sao con người từ chỗ bình đẳng lại trở nên phân hóa giàu nghèo?",
        top: "60%", left: "20%",
        content: {
          slides: [
            { 
              text: "Ngày xưa, trong xã hội cộng sản nguyên thủy, con người sống theo thị tộc. Mọi người lao động cùng nhau để săn bắt, hái lượm và chia sẻ sản phẩm gần như ngang nhau.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/xa-hoi-thi-toc-va-cong-xa-thi-toc-mau-he.jpg" 
            },
            { 
              text: "Khi lực lượng sản xuất còn rất thấp, làm ra bao nhiêu ăn bấy nhiêu, nên chưa có điều kiện để tích lũy lớn hoặc chiếm giữ lâu dài. Nhưng khi công cụ kim loại xuất hiện, năng suất tăng, xã hội có 'của cải dư thừa'.", 
              image: "https://dolavn.vn/wp-content/uploads/2018/10/Ky-nguyen-san-ban.jpg" 
            },
            { 
              text: "Từ đó nảy sinh xu hướng giữ lại sản phẩm tốt hơn. Những người có địa vị (thủ lĩnh, người giữ kho) chiếm giữ nhiều của cải hơn. Tư hữu ra đời, kéo theo sự phân hóa giàu – nghèo.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/xa-hoi-chiem-huu-no-le-va-che-do-tu-huu-xuat-hien.jpg" 
            },
            { 
              // SLIDE CUỐI CÙNG LÀ KẾT LUẬN
              text: "Kết luận: Giai cấp hình thành từ biến đổi kinh tế. Khi tư hữu xuất hiện và của cải phân chia không đều, xã hội phân hóa thành các nhóm người có lợi ích khác nhau.", 
              image: "https://luatduonggia.vn/wp-content/uploads/2024/08/chuyen-bien-cua-nguoi-nguyen-thuy-sau-khi-kim-loai-xuat-hien.jpg" 
            }
          ],
          quizzes: [
            {
              question: "Khi xã hội đã có của cải dư thừa và có người nắm giữ nhiều hơn, liệu cộng đồng có thể mãi duy trì sự bình đẳng như trước không?",
              options: [
                "Có, nếu mọi người tự nguyện nhường nhịn",
                "Không, sự xuất hiện của tư hữu sẽ dẫn đến phân hóa giai cấp",
                "Có, vì luật pháp ngăn cấm",
                "Không, vì thần linh không cho phép"
              ],
              correctIndex: 1,
              explanation: "Của cải dư thừa tạo điều kiện cho tư hữu, và tư hữu là nguồn gốc sâu xa của sự phân chia giai cấp."
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
              text: "Trong xã hội chiếm hữu nô lệ, chủ nô sở hữu ruộng đất, công cụ và cả người lao động. Nô lệ bị cưỡng bức lao động nặng nhọc, nhưng thành quả chủ yếu thuộc về chủ nô.", 
              image: "https://phaptri.vn/upload_images/images/2023/11/05/che-do-no-le-06.png" 
            },
            { 
              text: "Có những nô lệ làm việc từ sáng đến tối mà vẫn không có quyền quyết định cuộc sống. Khi sự áp bức tăng lên, họ tìm cách bỏ trốn, phá hoại công cụ hoặc nổi dậy.", 
              image: "https://lh5.googleusercontent.com/proxy/Def7si19cg3_FnQgROsRQY4UfDmBBT99S1O4lHflGXgTAOJNurv8PTcAnS1YZ2TUyustZo3cVrxs8B906dcL827YSAiVeyi50sFHPjJlTQP7dl_A" 
            },
            { 
              text: "Chủ nô dùng bạo lực để đàn áp. Một bên muốn giữ đặc quyền, bên kia muốn thoát khỏi thân phận bị trị. Mâu thuẫn vì thế ngày càng gay gắt.", 
              image: "https://media.istockphoto.com/id/157479463/vi/vec-to/n%C3%B4-l%E1%BB%87-da-%C4%91en-ch%E1%BA%A5t-%C4%91%E1%BA%A7y-tr%C3%AAn-t%C3%A0u-1881.jpg?s=612x612&w=0&k=20&c=R8O5ksAgVNVnU892ZKb-35C0xuL8sY6hWVWzt0lyOPw=" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Trong xã hội có bóc lột và đối kháng lợi ích, đấu tranh giai cấp là khó tránh khỏi. Nó phản ánh nhu cầu khách quan muốn thay đổi địa vị của người bị áp bức.", 
              image: "https://redsvn.net/wp-content/uploads/2019/01/History+Of+Slavery+In+Louisiana+-+New+Orleans+Slave+Market-742486.png" 
            }
          ],
          quizzes: [
            {
              question: "Khi một bên sống bằng cách chiếm đoạt sức lao động của bên còn lại, mâu thuẫn đó có thể được giải quyết chỉ bằng lời kêu gọi “hòa thuận” không?",
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
              text: "Ban đầu con người sống trong các cộng đồng nhỏ như thị tộc, rồi liên kết thành bộ lạc. Khi sản xuất phát triển, giao lưu tăng lên, nhiều bộ lạc liên kết thành cộng đồng lớn hơn.", 
              image: "https://img.loigiaihay.com/picture/2021/0921/4.jpg" 
            },
            { 
              text: "Cùng với sự ổn định lãnh thổ, sự thống nhất kinh tế, ngôn ngữ chung và văn hóa chung, cộng đồng người phát triển thành Dân tộc.", 
              image: "https://api.toploigiai.vn/storage/uploads/thi-toc-la-gi_2" 
            },
            { 
              text: "Dân tộc không chỉ là một nhóm người 'sống gần nhau', mà là sự gắn bó bền vững trên nền tảng lịch sử – kinh tế – xã hội lâu dài.", 
              image: "https://lichsu.org/wp-content/uploads/2021/09/nha-nuoc-ra-doi-nhu-the-nao.jpg" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Dân tộc hình thành qua quá trình lịch sử lâu dài. Khi lãnh thổ, kinh tế, ngôn ngữ và văn hóa ổn định, dân tộc trở thành hình thức cộng đồng bền vững.", 
              image: "https://haylamdo.com/lich-su-6-ket-noi/images/ly-thuyet-bai-5-xa-hoi-nguyen-thuy-80091.png" 
            }
          ],
          quizzes: [
            {
              question: "Vì sao khi kinh tế và giao lưu xã hội phát triển, con người lại có xu hướng hình thành những cộng đồng rộng và ổn định hơn?",
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
              text: "Một công ty mở rộng sản xuất, doanh thu và lợi nhuận tăng. Tuy nhiên, người lao động phải tăng ca nhiều hơn, áp lực lớn hơn, trong khi mức lương chỉ tăng rất chậm.", 
              image: "https://media.vneconomy.vn/images/upload/2025/04/13/photo1630405678900-1630405678983360611892.jpg" 
            },
            { 
              text: "Người lao động đề nghị cải thiện thu nhập. Phía quản lý cho rằng chi phí vận hành lớn nên chưa thể tăng lương. Hai bên có lý lẽ riêng.", 
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200" 
            },
            { 
              text: "Sâu xa là sự khác nhau về vị trí: một bên sống bằng tiền lương, một bên gắn lợi ích với lợi nhuận. Mâu thuẫn quyền lợi là có thật.", 
              image: "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2025/04/16/financial-stress-tile-1--38443951816629927653625.jpg" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Khi lợi ích phân phối không tương xứng với đóng góp lao động, mâu thuẫn xã hội dễ phát sinh. Cần cơ chế điều hòa lợi ích và bảo đảm quyền lợi người lao động.", 
              image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200" 
            }
          ],
          quizzes: [
            {
              question: "Nếu năng suất và lợi nhuận tăng nhưng đời sống người lao động không được cải thiện tương ứng, mâu thuẫn sẽ phát triển theo hướng nào?",
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
              text: "Một đất nước bị ngoại bang thống trị: tài nguyên bị khai thác, quyền tự quyết bị tước đoạt, đời sống nhân dân khó khăn. Người lao động chịu áp bức kép.", 
              image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/French_capture_of_Danang_1858.jpg" 
            },
            { 
              text: "Nếu dân tộc chưa giành được độc lập, mọi nỗ lực cải thiện đời sống xã hội đều bị hạn chế. Nhiệm vụ giành độc lập trở thành yêu cầu cấp bách nhất.", 
              image: "https://thuviennguyenvanhuong.vn/wp-content/uploads/2023/08/LE-KY-HOA-UOC-NHAM-TUAT-1862-tai-SAIGON-.jpg" 
            },
            { 
              text: "Chỉ khi đất nước độc lập, người dân mới có thể làm chủ vận mệnh và xây dựng xã hội theo hướng tiến bộ hơn.", 
              image: "https://i0.wp.com/nghiencuulichsu.com/wp-content/uploads/2016/12/annamese_kowtowing_to_french_soldiers.jpg?fit=1200%2C953&ssl=1" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Độc lập dân tộc là điều kiện quan trọng để giải quyết các vấn đề công bằng và tiến bộ. Khi dân tộc làm chủ vận mệnh, mới có thể cải biến xã hội chủ động.", 
              image: "https://images.hcmcpv.org.vn//Uploads/Image/31082021318ABD96/33.jpg" 
            }
          ],
          quizzes: [
            {
              question: "Khi không có chủ quyền và độc lập, liệu nhân dân có thể tự lựa chọn con đường phát triển cho mình hay không?",
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
              text: "Trong một quốc gia, cơ cấu xã hội đa dạng: chủ doanh nghiệp, người làm công, nông dân... Khi nhà nước đưa ra chính sách, mỗi nhóm phản ứng khác nhau vì lợi ích khác nhau.", 
              image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200" 
            },
            { 
              text: "Nếu không giải quyết hợp lý, sự khác biệt có thể gây chia rẽ. Nhưng nếu xác định đúng lợi ích chung của quốc gia, các nhóm vẫn có thể đồng thuận.", 
              image: "https://imgcdn.tapchicongthuong.vn/tcct-media/21/6/25/gia-han-nop-thue-.jpg" 
            },
            { 
              text: "Đoàn kết không có nghĩa là lợi ích giống hệt nhau, mà là cùng hướng về lợi ích tối cao của Dân tộc và bảo đảm hài hòa lợi ích các bên.", 
              image: "https://file3.qdnd.vn/data/images/0/2023/04/27/hongthanhctd/chu%20tich%20quoc%20hoi%20vuong%20dinh%20hue%20cung%20doan%20cong%20tac%20da%20toi%20tham%20dong%20vien%20can%20bo%20chien%20si%20dang%20thi%20cong%20du%20an%20san%20bay%20phan%20thiet%2025%203%202023%20anh%20quochoi%20vn.jpeg?dpi=150&quality=100&w=870" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Đoàn kết dân tộc bền vững phải dựa trên lợi ích chung, đồng thời giải quyết hợp lý các mâu thuẫn lợi ích trong xã hội. Công bằng là nền tảng của sự gắn kết.", 
              image: "https://img.baobacninhtv.vn/Medias/2023/02/08/10/20230208101847-15.jpg?w=800&h=354&quality=100" 
            }
          ],
          quizzes: [
            {
              question: "Khi các nhóm xã hội có lợi ích khác nhau, làm sao để vẫn xây dựng được sự đoàn kết và ổn định lâu dài?",
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
    mapImage: "https://cdnv2.tgdd.vn/mwg-static/common/News/1345010/ai-iot-la-gi-tri-tue-nhan-tao-cua-van-vat-la-gi-3.jpg",
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
              text: "Trong tương lai gần, AI và Robot tự động hóa nhiều ngành. Một nhóm nhỏ sở hữu công nghệ, dữ liệu và vốn sẽ có lợi thế rất lớn, giàu lên cực nhanh.", 
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200" 
            },
            { 
              text: "Ngược lại, nhiều lao động phổ thông bị thay thế, mất việc hoặc giảm thu nhập. Xã hội xuất hiện khoảng cách lớn giữa người 'nắm công nghệ' và người 'chỉ có sức lao động'.", 
              image: "https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1553101916830-KD9QW878USS1CWNBWMO2/image-asset.jpeg" 
            },
            { 
              text: "Mâu thuẫn mới về quyền sở hữu, cơ hội phát triển và phân phối thành quả sẽ nảy sinh khi công nghệ trở thành yếu tố quyết định.", 
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Khi sản xuất biến đổi mạnh, xã hội có thể phát sinh phân hóa mới. Nếu không có cơ chế điều chỉnh, chênh lệch giàu nghèo và bất ổn xã hội sẽ tăng lên.", 
              image: "https://vr360.com.vn/uploads/images/vi-du-ve-nha-may-thong-minhh.jpg" 
            }
          ],
          quizzes: [
            {
              question: "Khi công nghệ và dữ liệu trở thành yếu tố quyết định sản xuất, ai sẽ có quyền quyết định lợi ích kinh tế trong xã hội?",
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
              text: "Khi kinh tế suy thoái, đời sống khó khăn, tâm lý xã hội dễ căng thẳng. Nếu có lực lượng kích động, mâu thuẫn vùng miền hoặc dân tộc có thể bị thổi phồng.", 
              image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1200" 
            },
            { 
              text: "Người lao động dễ quay sang nghi kỵ và đối đầu nhau. Trong khi đó, những nguyên nhân sâu xa như bất công phân phối hay lợi ích nhóm lại bị che mờ.", 
              image: "https://eahleo.daklak.gov.vn/uploads/eahleo/tin-tuc/nam2023/thang7/ngay17/etu.png" 
            },
            { 
              text: "Khi xã hội bị chia rẽ, sức mạnh đoàn kết giảm xuống và những vấn đề cốt lõi càng khó giải quyết.", 
              image: "https://images2.thanhnien.vn/zoom/1200_630/uploaded/hoangnam/2015_02_09/19a1_UHLX.jpg" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Muốn giữ ổn định cần nhìn đúng gốc rễ vấn đề. Khi bất công kinh tế – xã hội không được xử lý, mâu thuẫn rất dễ bị lợi dụng và đẩy lên thành xung đột.", 
              image: "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2023/4/28/avatar1682701500148-1682701500530435853209.jpeg" 
            }
          ],
          quizzes: [
            {
              question: "Làm sao để phân biệt đâu là mâu thuẫn thật sự cần giải quyết, đâu là mâu thuẫn bị kích động nhằm gây chia rẽ xã hội?",
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
              text: "Thảm họa khí hậu, dịch bệnh xảy ra. Các quốc gia cần hợp tác. Nhưng thực tế, nước mạnh về kinh tế thường ưu tiên bảo vệ lợi ích của họ trước.", 
              image: "https://static.tuoitre.vn/tto/i/s626/2017/05/25/hinh-2-1495695795.jpg" 
            },
            { 
              text: "Ngay trong một nước, người giàu có điều kiện tự bảo vệ tốt hơn. Người lao động nghèo chịu thiệt hại nặng nhất vì thu nhập bấp bênh.", 
              image: "https://cacnuoc.vn/wp-content/uploads/2016/11/quatar-top-1-dat-nuoc-giau-nhat-the-gioi.jpg" 
            },
            { 
              text: "Vấn đề là chung của nhân loại, nhưng mức độ thiệt hại lại rất khác nhau do sự chênh lệch về nguồn lực.", 
              image: "https://cdn.nhandan.vn/images/d0ea7e0f3e814877ff4a6ebd4816c4659464d5262df61dedc91b0d3461f350447f606e7fa5b9e94df6037729928b03fa/ndo_br_cho-1576.jpg" 
            },
            { 
              // KẾT LUẬN
              text: "Kết luận: Các vấn đề toàn cầu có thật, nhưng cách giải quyết không tách rời lợi ích kinh tế. Cần kết hợp hợp tác quốc tế với chính sách bảo đảm công bằng trong nước.", 
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" 
            }
          ],
          quizzes: [
            {
              question: "Vì sao một vấn đề chung của nhân loại lại tạo ra mức độ thiệt hại rất khác nhau giữa các quốc gia và giữa các nhóm xã hội?",
              options: [
                "Do may mắn ngẫu nhiên",
                "Do sự chi phối của lợi ích quốc gia và sự phân hóa giàu nghèo về nguồn lực",
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
  "hidden": {
    title: "Sự Thật Cuối Cùng",
    // Link ảnh gốc: Pyramid of Capitalist System (1911)
    finalImage: "https://topwar.ru/uploads/posts/2025-11/dfa70f43fd_pyramid_of_capitalist_system.webp", 
    
    // Các từ khóa chấp nhận cho đáp án đúng (Tiếng Việt và Tiếng Anh)
    validAnswers: [
      "chủ nghĩa tư bản", "chu nghia tu ban", 
      "tháp tư bản", "thap tu ban",
      "kim tự tháp tư bản", "kim tu thap tu ban",
      "hệ thống tư bản", "he thong tu ban",
      "xã hội tư bản", "xa hoi tu ban",
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