from tkinter import *
import sqlite3
from tkinter import ttk

win = Tk()
win.title("Suaybaguio Tree View")
s=ttk.Style()
s.theme_use('clam')

tree=ttk.Treeview(win, column=("c1","c2","c3"), show='headings',height=5)
tree.column('#1', anchor=CENTER)
tree.heading('#1', text="Student ID")
tree.column('#2', anchor=CENTER)
tree.heading('#2', text="Student Name")
tree.column('#3', anchor=CENTER)
tree.heading('#3', text="Score")

conn=sqlite3.connect('dbfinal.db')
cursor = conn.execute("select * from tblstudent")
for row in cursor:
    tree.insert('','end',text='1', values=(str(row[0]), row[1], str(row[2])))

tree.grid(row=4, column=0, columnspan=2)


def add_record():
    sid = int(sid_entry.get())
    name = name_entry.get()
    score = int(score_entry.get())
    conn.execute("INSERT INTO tblstudent VALUES (?,?,?)", (sid,name,score))
    tree.insert('','end',text='1', values=(sid, name, score))
    conn.commit()
    
def delete_record():
    global sid_entry
    sid = int(sid_entry.get())
    conn.execute("DELETE FROM tblstudent where studid=?", (sid,))
    conn.commit()
    refresh_treeview()

def refresh_treeview():
    for item in tree.get_children():
        tree.delete(item)
    cursor = conn.execute("select * from tblstudent")
    for row in cursor:
        tree.insert('','end',text='1', values=(str(row[0]), row[1], str(row[2])))
    

sid_label = Label(win, text="Student ID: ")
sid_label.grid(row=0,column=0)
sid_entry = Entry(win, width=40)
sid_entry.grid(row=0, column=1)

name_label = Label(win, text="Student Name: ")
name_label.grid(row=1,column=0)
name_entry = Entry(win, width=40)
name_entry.grid(row=1, column=1)

score_label = Label(win, text="Score: ")
score_label.grid(row=2,column=0)
score_entry = Entry(win, width=40)
score_entry.grid(row=2, column=1)

add_button = ttk.Button(win, text = "Add Record", command=add_record)
add_button.grid(row=3, column=0)
delete_button = ttk.Button(win, text = "Delete Record", command=delete_record)
delete_button.grid(row=3, column=1)


sid_entry.focus_set()
win.mainloop()
