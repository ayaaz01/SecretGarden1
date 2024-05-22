using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace SecretGardenApp2
{
    public partial class MainForm : Form
    {
        bool admin = false;
        // Dummy Data Dict
        Dictionary<string, Dictionary<string, string>> pictures = new Dictionary<string, Dictionary<string, string>>()
        {
            { "2024", new Dictionary<string, string>()
                {
                    {"Track", "./Resources/track.png" },
                    {"Peter Pan Play", "./Resources/drama.jpg" },
                    {"Art Competition", "./Resources/artcomp.png" },
                    {"Swimming", "./Resources/swimming.jpg" },
                } 
            },
            { "2023", new Dictionary<string, string>()
                {
                    {"Drama", "./Resources/drama.jpg" },
                    {"Drama2", "./Resources/drama.jpg" },
                    {"Drama3", "./Resources/drama.jpg" },
                    {"Drama4", "./Resources/drama.jpg" },
                } 
            },
            { "2022", new Dictionary<string, string>()
                {
                    {"artcomp", "./Resources/artcomp.png" },
                    {"artcomp2", "./Resources/artcomp.png" },
                    {"artcomp3", "./Resources/artcomp.png" },
                    {"artcomp4", "./Resources/artcomp.png" },
                } 
            },
            { "2021", new Dictionary<string, string>()
                {
                    {"swimming", "./Resources/swimming.jpg" },
                    {"swimming2", "./Resources/swimming.jpg" },
                    {"swimming3", "./Resources/swimming.jpg" },
                    {"swimming4", "./Resources/swimming.jpg" },
                } 
            },
            { "2020", new Dictionary<string, string>()
                {
                    {"Track", "./Resources/track.png" },
                    {"Track2", "./Resources/track.png" },
                    {"Track3", "./Resources/track.png" },
                    {"Track4", "./Resources/track.png" },
                } 
            }
        };
        public MainForm()
        {
            InitializeComponent();
            this.Load += new EventHandler(MainForm_Load); // Ensure the Load event is bound
            this.cmbYear.SelectedIndex = 0;
            string year = this.cmbYear.SelectedItem.ToString();
            int i = 0;
            foreach (KeyValuePair<string, string> kvp in this.pictures[year])
            {
                switch (i)
                {
                    case 0:
                        this.label11.Text = kvp.Key;
                        this.pictureBox5.Load(kvp.Value);
                        break;
                    case 1:
                        this.label12.Text = kvp.Key;
                        this.pictureBox6.Load(kvp.Value);
                        break;
                    case 2:
                        this.label13.Text = kvp.Key;
                        this.pictureBox7.Load(kvp.Value);
                        break;
                    case 3:
                        this.label14.Text = kvp.Key;
                        this.pictureBox8.Load(kvp.Value);
                        break;
                }
                i++;
            }

            TbcMain.Appearance = TabAppearance.FlatButtons;
            TbcMain.ItemSize = new System.Drawing.Size(0, 1);
            TbcMain.SizeMode = TabSizeMode.Fixed;

            menuStrip1.Visible = false;
            menuStrip2.Visible = false; 
        }
        
        class User
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public bool IsAdmin { get; set; }
        }

        private User user1 = new User();
        private User user2 = new User();

        private void MainForm_Load(object sender, EventArgs e)
        {
            // Initialize user credentials
            user1.Username = "charlie";
            user1.Password = "password";
            user1.IsAdmin = true;

            user2.Username = "karen";
            user2.Password = "password";
            user2.IsAdmin = false;

            // Initial label text
            // label47.Text = dateTimePicker1.Value.ToString("d");
            // Subscribe to the ValueChanged event
            dateTimePicker1.ValueChanged += new EventHandler(dateTimePicker1_ValueChanged);
        }

        private void BtnLogin_Click(object sender, EventArgs e)
        {
            string username = TBUsername.Text.ToLower();
            string password = TBPassword.Text;

            if (user1.Username.ToLower() == username && user1.Password == password)
            {
                // Redirect to admin stuff
                MessageBox.Show("Welcome Admin!");
                TbcMain.SelectedTab = AdminInbox;

                textBox11.Text = username;
                menuStrip1.Visible = false;
                menuStrip2.Visible = true;
                //admin = true;
            }
            else if (user2.Username.ToLower() == username && user2.Password == password)
            {
                // Redirect to normal user stuff
                MessageBox.Show("Welcome User!");
                TbcMain.SelectedTab = Inbox;

                textBox1.Text = username;
                menuStrip1.Visible = true;
                menuStrip2.Visible = false;
                //admin = false;
            }
            else
            {
                // Show error
                MessageBox.Show("Invalid login credentials.");
                
            }
            

           // if (admin)
           // {
           //     menuStrip1.Visible = false;
           //     menuStrip2.Visible = true;
           //     
           // } else
           // {
           //     menuStrip1.Visible = true;
           //     menuStrip2.Visible = false;
           //
           // }
        }


        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {
            label47.Text = dateTimePicker1.Value.ToString("d");
        }

       

        private void cmbYear_SelectedIndexChanged(object sender, EventArgs e)
        {
            string year = cmbYear.SelectedItem.ToString();
            int i = 0;
            foreach (KeyValuePair<string, string> kvp in this.pictures[year])
            {
                switch (i)
                {
                    case 0:
                        this.label11.Text = kvp.Key;
                        this.pictureBox5.Load(kvp.Value);
                        break;
                    case 1:
                        this.label12.Text = kvp.Key;
                        this.pictureBox6.Load(kvp.Value);
                        break;
                    case 2:
                        this.label13.Text = kvp.Key;
                        this.pictureBox7.Load(kvp.Value);
                        break;
                    case 3:
                        this.label14.Text = kvp.Key;
                        this.pictureBox8.Load(kvp.Value);
                        break;
                }
                i++;
            }
        }

        private void inboxToolStripMenuItem_Click_1(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Inbox;

        }

        private void messageRequestToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = MessageRequest;
        }

        private void resourcesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Resources;
        }

        private void calendarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Calendar;
        }

        private void galleryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Gallery;
        }

        private void newsletterToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Newsletter;
        }

        private void profileToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Profile;
        }

        private void inboxToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminInbox;
        }

        private void userSearchToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserSearch;
        }

        private void resourcesToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminResources;
        }

        private void galleryToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminGallery;
        }

        private void calendarToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminCalendar;
        }

        private void profileToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminProfile;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = LoginPage;
            menuStrip1.Visible = false;
            menuStrip2.Visible = false;
            TBUsername.Clear();
            TBPassword.Clear();

        }

        private void button9_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = LoginPage;
            menuStrip1.Visible = false;
            menuStrip2.Visible = false;
            TBUsername.Clear();
            TBPassword.Clear();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            
            TbcMain.SelectedTab = UserMedia;
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            
            TbcMain.SelectedTab = UserArtsandCrafts;
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            
            TbcMain.SelectedTab = UserTips;
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {
         
            TbcMain.SelectedTab = UserResources;
        }


        private void panel42_Paint(object sender, PaintEventArgs e)
        {

        }

        private void panel43_Paint(object sender, PaintEventArgs e)
        {

        }

        private void panel40_Paint(object sender, PaintEventArgs e)
        {

        }

        private void panel41_Paint(object sender, PaintEventArgs e)
        {

        }

        private void mediaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserMedia;
        }

        private void artsAndCraftsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserArtsandCrafts;
        }

        private void tipsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserTips;
        }

        private void additionalResourcesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserResources;
        }

        private void pictureBox5_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserGallery;
        }

        private void pictureBox6_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserGallery;
        }

        private void pictureBox7_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserGallery;
        }

        private void pictureBox8_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserGallery;
        }

        private void button13_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserSend;
        }

        private void button14_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserRefer;
        }

        private void textBox18_Click(object sender, EventArgs e)
        {
            textBox18.Clear();
        }


        private void textBox20_Click(object sender, EventArgs e)
        {
            textBox20.Clear();
        }

        private void textBox19_Click(object sender, EventArgs e)
        {
            textBox19.Clear();
        }

        private void textBox21_Click(object sender, EventArgs e)
        {
            textBox21.Clear();
        }
                
        private void button4_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserSecurity;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = UserSetting;
        }

        private void button8_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminCompose;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminOpened;
        }

        private void button6_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminArchive;
        }

        private void pictureBox14_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AntonyMark;
        }

        private void pictureBox16_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Resources;
        }

        private void pictureBox19_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Gallery;
        }

        private void pictureBox23_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = Calendar;
        }

        private void textBox30_Click(object sender, EventArgs e)
        {
            textBox30.Clear();
        }

        private void pictureBox17_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminAddResource;
        }

        private void pictureBox18_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminAddGallery;
        }

        private void pictureBox22_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminAddCalendar;
        }

        private void button11_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminSecurity;
        }

        private void button10_Click(object sender, EventArgs e)
        {
            TbcMain.SelectedTab = AdminSettings;
        }

        private void button21_MouseEnter(object sender, EventArgs e)
        {
            TBPassword.PasswordChar = '\0';
        }

        private void button21_MouseLeave(object sender, EventArgs e)
        {
            TBPassword.PasswordChar = '*';
        }

        private void button16_Click(object sender, EventArgs e)
        {

            textBox20.Text = "Subject:";
            textBox18.Text = "To:";
            textBox19.Text = "Message:";
            MessageBox.Show("Message Sent!");
        }

        private void button7_Click(object sender, EventArgs e)
        {

            textBox23.Text = "Subject:";
            textBox24.Text = "To:";
            textBox22.Text = "Message:";
            MessageBox.Show("Message Sent!");
        }

        private void button15_Click(object sender, EventArgs e)
        {

            textBox21.Text = "Refer to:";
            MessageBox.Show("Referal Sent!");
        }

        private void button12_Click(object sender, EventArgs e)
        {
            textBox30.Text = "Add to Resources//";
            MessageBox.Show("Resource Added");
        }

        private void button20_Click(object sender, EventArgs e)
        {
            textBox30.Text = "Add Event to Calendar//";
            MessageBox.Show("Event Added");
        }

        private void button18_Click(object sender, EventArgs e)
        {
            textBox31.Text = "Add to Gallery//";
            MessageBox.Show("Picture Added");
        }

        private void button19_Click(object sender, EventArgs e)
        {
            textBox63.Text = "Add new Event//";
            MessageBox.Show("Event Added!");
        }
    }
}
