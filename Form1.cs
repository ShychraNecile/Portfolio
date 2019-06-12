using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DesktopTicTacToe
{
    public partial class Form1 : Form
    {
        string spelerAanDeBeurt;
        string symbool;
        Color currentPlayer = Color.LightBlue;
        public Form1()
        {
            InitializeComponent();
        }

        private void WisselSpeler() {
            if (spelerAanDeBeurt.Equals(textBox1.Text))
            {
                spelerAanDeBeurt = textBox2.Text;
                symbool = "O";
                textBox1.BackColor = Color.White;
                textBox2.BackColor = currentPlayer;
            }
            else
            {
                spelerAanDeBeurt = textBox1.Text;
                symbool = "X";
                textBox2.BackColor = Color.White;
                textBox1.BackColor = currentPlayer;
            }
        }
        private bool CheckWinst() {
            if (button1.Text.Equals(symbool) && button2.Text.Equals(symbool) && button3.Text.Equals(symbool)) {
                return true;
            }
            return false;
        }
        private bool VeldenVol() {
            if (button1.Enabled) return false;
            if (button2.Enabled) return false;
            if (button3.Enabled) return false;
            if (button4.Enabled) return false;
            if (button5.Enabled) return false;
            if (button6.Enabled) return false;
            if (button7.Enabled) return false;
            if (button8.Enabled) return false;
            if (button9.Enabled) return false;
            return true;
        }
        private void VerwerkZet(Button button)
        {
            button.Text = symbool;
            button.Enabled = false;
            if (CheckWinst())
            {

                label3.Visible = true;

            }
            else if (VeldenVol()) {
                label3.Text = "Gelijk spel...";
                label3.Visible = true;
            }
            else
            {
                WisselSpeler();
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            spelerAanDeBeurt = textBox1.Text;
            symbool = "X";
            textBox1.BackColor = Color.LightBlue;
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            button1.Text = symbool;
            VerwerkZet(button1);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            VerwerkZet(button2);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            VerwerkZet(button3);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            VerwerkZet(button4);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            VerwerkZet(button5);
        }

        private void button6_Click(object sender, EventArgs e)
        {
            VerwerkZet(button6);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            VerwerkZet(button7);
        }

        private void button8_Click(object sender, EventArgs e)
        {
            VerwerkZet(button8);
        }

        private void button9_Click(object sender, EventArgs e)
        {
            VerwerkZet(button9);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}

